import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form, Spinner, Toast } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { requestOTP, resetPassword } from "../../features/users/userAxios";
import { toast } from "react-toastify";

const timeToRequestOtpAgain = 60; //s

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const { form, handleOnChange } = useForm();
  const [showPassResetForm, setShowPassResetForm] = useState(false);

  const [isOtpPending, setIsOtpPending] = useState(false);
  const [isOptBtnDisabled, setIsOptBtnDisabled] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
     const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    }else(setIsOptBtnDisabled(false))

    
  }, [counter]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value; // Access the actual input value
    setIsOptBtnDisabled(true);
    setIsOtpPending(true);
    const response = await requestOTP({ email });
    if (response.status === "success") {
      setShowPassResetForm(true);
    }
     setIsOtpPending(false);
    // setIsOptBtnDisabled(false);
    setCounter(timeToRequestOtpAgain)
   
  };

  const handleOnSubmitPassword = async(e) => {
    e.preventDefault();
    form.otp = Number(form.otp)
    //axios call 
    const {status,message} = await resetPassword({otp:form.otp,email:emailRef.current.value,password:form.password});
    if (status === "success") {
      toast[status](message)
      navigate("/signin")
    }
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
            <Button type="submit" className="w-100" disabled={isOptBtnDisabled}>
              {isOtpPending ? (
                <Spinner variant="border" />
              ) : counter > 0? (
                `Request OTP in ${counter}`
              ) : (
                "Request OTP"
              )}
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
