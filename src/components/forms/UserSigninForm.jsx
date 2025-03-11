import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {
  userSigninInput
} from "../../assets/form-data/UserAuthInput";
import CustomInput from "../custom-input/CustomInput";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helper/axiosHelper.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../features/users/userActions.js";

const UserSigninForm = () => {
  const { form, handleOnChange } = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(111,location)

  // to handle return location
  const { user } = useSelector((state) => state.userInfo);
  // set sendTo location depending upon user url interaction
  const sendTo = location?.state?.from?.location?.pathname || "/dashboard";

  useEffect(() => {
    user?._id && navigate(sendTo);
  }, [user?._id, navigate, sendTo]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginAction(form, navigate));
    // }
  };

  return (
    <>
      <h4>User Signin</h4>
      <Form onSubmit={handleOnSubmit}>
        {userSigninInput.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <Button type="submit" className="w-100">
          Signin
        </Button>

        <p className="mt-3 text-center ">
          <Link to="/signup">Unlock account ?</Link>
        </p>
      </Form>
    </>
  );
};
export default UserSigninForm;
