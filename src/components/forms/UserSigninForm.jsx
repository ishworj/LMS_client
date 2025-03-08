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
import { useDispatch } from "react-redux";
import { loginAction } from "../../features/users/userActions.js";

const UserSigninForm = () => {
  const { form, handleOnChange } = useForm({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

     dispatch(loginAction(form, navigate));
     
    // const data = await apiProcessor({
    //   method: "post",
    //   url: "http://localhost:8080/api/v1/auth/login",
    //   data: form,
    //   isPrivate: false,
    // });

    // if (data.status == "success") {
    //   // update session storage for access
    //   sessionStorage.setItem("accessJWT", data.accessToken);
    //   // update the local storage for refresh
    //   localStorage.setItem("refreshJWT", data.refreshToken);
    //   navigate("/dashboard");
    // }
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
