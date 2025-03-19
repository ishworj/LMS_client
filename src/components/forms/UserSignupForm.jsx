import React from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { userSignupInput } from "../../assets/form-data/UserAuthInput";
import CustomInput from "../custom-input/CustomInput";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helper/axiosHelper.js";
import { Link } from "react-router-dom";
const authEp = import.meta.env.VITE_APP_ROOT_URL + "/auth";

const UserSignupForm = () => {
  const { form, handleOnChange } = useForm({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = await apiProcessor({
      method: "post",
      url: authEp +"/register",
      data: form,
      isPrivate: false,
    });

    if (data.status == "success") {
  alert("user created you may login now")
    }
  };
  return (
    <>
      <Form onSubmit={handleOnSubmit} className="d-flex flex-column ">
        <p>Signup now for amazing boooks</p>
        {userSignupInput.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <Button type="submit">Signup</Button>
        <p>
          Already have account ? <Link to="/signin">signin here</Link>
        </p>
      </Form>
    </>
  );
};

export default UserSignupForm;
