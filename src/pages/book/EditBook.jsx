import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { inputFields } from "../../assets/formInputs";
import useForm from "../../hooks/useForm";
import UserLayout from "../../components/layout/UserLayout";
import CustomInput from "../../components/custom-input/CustomInput";
import { setSelectedBook } from "../../features/books/bookSlice";
import { updateSingleBookAction } from "../../features/books/bookActions";

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { form, handleOnChange, setForm } = useForm({});
  const navigate = useNavigate();

  const { books, selectedBook } = useSelector((state) => state.books);

  // update selectedBook
  useEffect(() => {
    dispatch(setSelectedBook(books.find((item) => item._id == _id)));
    console.log("use effect called to set selected ");
  }, []);

  useEffect(() => {
    setForm(selectedBook);
    console.log("use effect called to setform for selected");
  }, [selectedBook]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { __v, createdAt, isbn, updatedAt, thumbnail, _id, ...rest } = form;

    const formData = new FormData();
    Object.keys(rest).forEach((key) => {
      formData.append(key, rest[key]);
    });

    //TODO   sow thumbnail of seperate update thumbnail

    if (window.confirm("Are you sure you want to make this changes?")) {
      const data = await dispatch(updateSingleBookAction(formData, _id));
      if (data.status == "success") {
        navigate("/admin/books");
      }
    }
  };

  return (
    <UserLayout pageTitle={"Update book"}>
      <div className="mt-5">
        {/* form here  */}

        <h4 className="py-4">Update the new book</h4>

        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="status"
            onChange={handleOnChange}
            checked={form?.status === "active"}
            type="switch"
            id="custom-switch"
            label={form?.status?.toUpperCase()}
            className={
              form?.status === "active"
                ? "mb-3 text-success"
                : "mb-3 text-danger"
            }
          />
          {inputFields?.map((input, i) =>
            input.name == "thumbnail" ? (
              <Form.Group controlId="bookFile">
                <Form.Label>Update Book Cover Image</Form.Label>
                <Form.Control
                  type="file"
                  name="bookFile"
                  accept="image/*" // Only accept image files
                  onChange={handleOnChange}
                />
              </Form.Group>
            ) : (
              <CustomInput
                disabled={input.name === "isbn"}
                key={i}
                {...input}
                onChange={handleOnChange}
                value={form[input.name]}
              />
            )
          )}

          <div className="d-grid">
            <Button type="submit">Update Book</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default EditBook;
