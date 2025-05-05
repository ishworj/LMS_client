export const userSignupInput = [
  {
    label: "First Name",
    name: "fName",
    required: true,
    placeholder: "Enter your first name",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lName",
    required: true,
    placeholder: "Enter your last name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    required: true,
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    required: true,
    placeholder: "Enter your password",
    type: "password",
     pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$",
  title:
    "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.",
  },
  {
    label: "Phone",
    name: "phone",
    required: true,
    placeholder: "Enter your phone number",
    type: "tel",
      pattern: "^((\\+61|0)4\\d{8})$",
  title: "Enter a valid Australian mobile number starting with +61 or 04 followed by 8 digits",
  },
];





export const userSigninInput = [
  {
    label: "Email",
    name: "email",
    required: true,
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    required: true,
    placeholder: "Enter your password",
    type: "password",
  },
];
