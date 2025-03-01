import React from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import CustomInput from "../../components/custom-input/CustomInput";

const HomePage = () => {
  const searchInputs = [
    {
      name: "search",
      required: true,
      placeholder: "search by title / type / availability",
      type: "text",
      className:'p-3  rounded w-50 '
    },
  ];
  return (
    <Container className="">
      <Form className="d-flex ">
        {searchInputs.map((input) => (
          <CustomInput {...input}  />
        ))}
      </Form>
    </Container>
  );
};

export default HomePage;
