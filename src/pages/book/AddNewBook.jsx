import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { inputFields } from "../../assets/formInputs";
import { useDispatch } from "react-redux";
import UserLayout from "../../components/layout/UserLayout";
import CustomInput from "../../components/custom-input/CustomInput";
import { postNewBookAction } from "../../features/books/bookActions";

const initialState = {};

const AddNewBook = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  
  const { form, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    //1. call post new book api
    //2. status check

    // TODO: call create new book action
    const success = await dispatch(postNewBookAction(form));
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

        <Form onSubmit={handleOnSubmit}>
          {inputFields.map((input, i) => (
            <CustomInput key={i} {...input} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button type="submit">Submit New Book</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default AddNewBook;
