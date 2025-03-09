import React from "react";
import UserSignupForm from "../../components/forms/UserSignupForm";

const Signup = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white border p-4 rounded">
        <UserSignupForm />
      </div>
    </div>
  );
};

export default Signup;
