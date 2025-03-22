import React from "react";
import { Form } from "react-router-dom";
import { forgotPasswordInput } from "../../assets/form-data/forgetPasswordInput";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { Button } from "react-bootstrap";

const ForgetPasswordPage = () => {
  const { form, handleOnChange } = useForm({});
  const handleOnSubmit = (e) => console.log(11);
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white border rounded p-4">
        <>
          <h4>User Signin</h4>
          <Form onSubmit={handleOnSubmit}>
            {forgotPasswordInput.map((input) => (
              <CustomInput
                key={input.name}
                {...input}
                onChange={handleOnChange}
              />
            ))}
            <Button type="submit" className="w-100">
              Signin
            </Button>

            <p className="mt-3 text-center ">
              <Link to="/signup">Unlock account ?</Link>
            </p>

            <p className="mt-3 text-center ">
              Forget password? <Link to="/signup">Reset NOW</Link>
            </p>
          </Form>
        </>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
