import React from 'react'
import { Form } from 'react-bootstrap';


const CustomInput = ({label , ...rest}) => {
  return (
    <Form.Group className="my-3 d-flex justify-content-center " controlId="formBasicEmail">
      <Form.Control{...rest}/>
    </Form.Group>
  );
}

export default CustomInput