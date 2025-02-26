import React from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { userSignupInput } from "../../assets/form-data/UserAuthInput";
import CustomInput from "../custom-input/CustomInput";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helper/axiosHelper.js";

const UserSignupForm = () => {
  const { form, handleOnChange } = useForm({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = await apiProcessor({
      method: "post",
      url: "http://localhost:8080/api/v1/auth/register",
      data: form,
      isPrivate: false,
    });

    if (data.status == "success") {
  alert("user created you may login now")
    }
  };
  return (
    <>
      <div>UserSignupForm</div>
      <Form onSubmit={handleOnSubmit}>
        {userSignupInput.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <Button type="submit">Signup</Button>
      </Form>
    </>
  );
};

export default UserSignupForm;
