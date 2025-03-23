import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { requestOTP } from "../../features/users/userAxios";

const ForgetPasswordPage = () => {
  const emailRef = useRef("");
  const { form, handleOnChange } = useForm();
  const [showPassResetForm, setShowPassResetForm] = useState(false);

  const [isOtpPending , setIsOtpPending] = useState(false)
  const [isOptBtnDisabled, setIsOptBtnDisabled] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value; // Access the actual input value
    setIsOptBtnDisabled(true)
    setIsOtpPending(true)
    const response = await requestOTP({ email });
    if (response.status==='success') {
      setShowPassResetForm(true)
    }
    setIsOptBtnDisabled(false);
    setIsOtpPending(false);
  };

  const handleOnSubmitPassword = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white border rounded p-4">
        <h4>Forget Password ?</h4>
        <p>please enter your email to reset your password</p>
        <div>
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              required={true}
              placeholder="Enter your email"
              type="email"
              ref={emailRef}
            />
            <Button type="submit" className="w-100">
              Request OTP
              {
                isOtpPending ? <Spinner variant="border"/>:"Request OTP"
              }
            </Button>
          </Form>
        </div>

        {showPassResetForm ? (
          <div>
            <Alert variant="success">
              We will send you an OTP to your email, if email is found in our
              system. Please cjek your junk/spam folder if you don't see email
              in inbox
            </Alert>
            <Form onSubmit={handleOnSubmitPassword}>
              <CustomInput
                label="OTP"
                name="otp"
                required={true}
                placeholder="5485"
                type="number"
                onChange={handleOnChange}
              />
              <CustomInput
                label="Password"
                name="password"
                required={true}
                placeholder="*********"
                type="password"
                onChange={handleOnChange}
              />
              <CustomInput
                label=" Confirm Password"
                name="confirmPassword"
                required={true}
                placeholder="**********"
                type="password"
                onChange={handleOnChange}
              />
              <Button type="submit" className="w-100">
                Reset Password
              </Button>
            </Form>
          </div>
        ) : (
          ""
        )}
        <div className="mt-3 text-center">
          Ready to login?
          <Link to="/signin">Login Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
