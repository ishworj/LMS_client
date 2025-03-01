import React from 'react'
import { Form } from 'react-bootstrap';


const CustomInput = ({label , ...rest}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control{...rest}/>
    </Form.Group>
  );
}

export default CustomInput