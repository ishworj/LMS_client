import { useState } from "react";
const handleOnChange = (e, form, setForm) => {
  let { name, value, checked, type, files } = e.target;

  if (type === "checkbox") {
    value = checked ? "active" : "inactive";
  }

  console.log(name, value, files);
 if ((name === "bookFile" || name === "profileFile") && files) {
   console.log("HERE");
   setForm({
     ...form,
     [name]: files[0],
   });
 } else {
   setForm({
     ...form,
     [name]: value,
   });
 }
};

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange(e, form, setForm),
  };
};

export default useForm;
