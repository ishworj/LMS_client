import { useState } from "react";
const handleOnChange = (e, form, setForm) => {
  let { name, value, checked, type } = e.target;

  if (type === "checkbox") {
    value = checked ? "active" : "inactive";
  }

  setForm({
    ...form,
    [name]: value,
  });
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
