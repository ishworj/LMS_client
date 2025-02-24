import React from "react";
import UserSignupForm from "../../components/forms/UserSignupForm";

const Signup = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white ">
        <UserSignupForm />
      </div>
    </div>
  );
};

export default Signup;
