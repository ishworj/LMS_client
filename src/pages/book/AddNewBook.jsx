import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { inputFields } from "../../assets/formInputs";
import { useDispatch } from "react-redux";
import UserLayout from "../../components/layout/UserLayout";
import CustomInput from "../../components/custom-input/CustomInput";
import { postNewBookAction } from "../../features/books/bookActions";
import ConfirmModal from "../../modals/ConfirmModal";

const initialState = {};

const AddNewBook = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { form, handleOnChange } = useForm(initialState);

 const handleOnFormSubmit = (e) => {
   e.preventDefault();
   setShowModal(true);
 };



  const handleOnSubmit = async () => {
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    const success = await dispatch(postNewBookAction(formData));
    console.log(2000, success);
    if (success) {
      navigate("/admin/books");
    }
  };

  return (
    <UserLayout pageTitle="New Book">
      <div>
        <Link to="/admin/books">
          <Button variant="secondary">&lt; Back</Button>
        </Link>
      </div>

      <div className="mt-5">
        {/* form here  */}

        <h4 className="py-4">Fill up the form to add new book</h4>

        <Form onSubmit={handleOnFormSubmit}>
          <Form.Group controlId="bookFile">
            <Form.Label>Upload Book Cover Image</Form.Label>
            <Form.Control
              type="file"
              name="bookFile"
              accept="image/*" // Only accept image files
              onChange={handleOnChange}
            />
          </Form.Group>
          {inputFields.map((input, i) =>
            input.name != "thumbnail" ? (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ) : (
              ""
            )
          )}

          <div className="d-grid">
            <Button type="submit">Submit New Book</Button>
          </div>
        </Form>
      </div>
      <ConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleOnSubmit}
        title="Adding book"
        message="Are you sure you want to add this book ?"
      />
    </UserLayout>
  );
};

export default AddNewBook;
