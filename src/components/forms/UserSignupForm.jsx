import React from 'react'
import { Form } from 'react-bootstrap';
import { userSignupInput } from '../../assets/form-data/UserAuthInput';
import CustomInput from '../custom-input/CustomInput';

const UserSignupForm = () => {
  return (
    <>
      <div>UserSignupForm</div>
      <Form>
        {userSignupInput.map((input)=>{
            <CustomInput  {...input}/>
        })}
      </Form>
    </>
  );
}

export default UserSignupForm