import React from 'react'
import UserSigninForm from '../../components/forms/UserSigninForm';

const Signin = () => {
   return (
     <div
       className="d-flex justify-content-center align-items-center bg-dark"
       style={{ minHeight: "100vh" }}
     >
       <div className="bg-white ">
         <UserSigninForm />
       </div>
     </div>
   );
}

export default Signin