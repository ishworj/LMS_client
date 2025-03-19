import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { inputFields } from "../../assets/formInputs";
import useForm from "../../hooks/useForm";
import UserLayout from "../../components/layout/UserLayout";
import CustomInput from "../../components/custom-input/CustomInput";
import { setSelectedBook } from "../../features/books/bookSlice";
import { updateSingleBookAction } from "../../features/books/bookActions";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { form, handleOnChange, setForm } = useForm({});
  const navigate = useNavigate();
  const { books, selectedBook } = useSelector((state) => state.books);

  // State to store the image preview
  const [imagePreview, setImagePreview] = useState("");
  console.log(imagePreview);

  // update selectedBook
  useEffect(() => {
    dispatch(setSelectedBook(books.find((item) => item._id == _id)));
    console.log("use effect called to set selected ");
  }, []);

  useEffect(() => {
    setForm(selectedBook);
    // Set the preview of the existing image if there's one
    if (selectedBook?.thumbnail) {
      setImagePreview(selectedBook.thumbnail);
    }
    console.log("use effect called to set form for selected");
  }, [selectedBook]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { __v, createdAt, isbn, updatedAt, thumbnail, _id, ...rest } = form;

    const formData = new FormData();
    Object.keys(rest).forEach((key) => {
      formData.append(key, rest[key]);
    });

    if (window.confirm("Are you sure you want to make these changes?")) {
      const data = await dispatch(updateSingleBookAction(formData, _id));
      if (data.status == "success") {
        navigate("/admin/books");
      }
    }
  };
  //TODO book not updating image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview as data URL
      };
      reader.readAsDataURL(file); // Read the file as data URL
    } else {
      // If no file is selected, set the preview to an empty string (reset)
      setImagePreview("");
    }
    handleOnChange(e); // Call your handleOnChange function to update form state
  };

  return (
    <UserLayout pageTitle={"Update book"}>
      <div className="mt-5">
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
            input.name === "thumbnail" ? (
              <Form.Group controlId="bookFile" key={i}>
                <Form.Label>Update Book Cover Image</Form.Label>
                {imagePreview && (
                  <div className="mb-3">
                    <img
                      src={
                        imagePreview.includes("http")
                          ? imagePreview
                          : `${imageUrl}/${imagePreview}`
                      }
                      alt="Book Cover Preview"
                      className="img-fluid"
                      style={{ maxWidth: "200px", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <Form.Control
                  type="file"
                  name="bookFile"
                  accept="image/*"
                  onChange={handleFileChange}
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
