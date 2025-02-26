import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  userSigninInput,
  userSignupInput,
} from "../../assets/form-data/UserAuthInput";
import CustomInput from "../custom-input/CustomInput";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helper/axiosHelper.js";
import { useNavigate } from "react-router-dom";

const UserSigninForm = () => {
  const { form, handleOnChange } = useForm({});
    const navigate = useNavigate();



  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = await apiProcessor({
      method: "post",
      url: "http://localhost:8080/api/v1/auth/login",
      data: form,
      isPrivate: false,
    });

    if (data.status == "success") {
      sessionStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/users/dashboard")
    }
  };

  return (
    <>
      <div>UserSigninForm</div>
      <Form onSubmit={handleOnSubmit}>
        {userSigninInput.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <Button type="submit">Signin</Button>
      </Form>
    </>
  );
};
export default UserSigninForm;
