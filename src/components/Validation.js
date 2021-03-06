import * as Yup from "yup";

const Validation = Yup.object({
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Your name is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Your email is required"),
  company: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Your company name is required"),
  telephone: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Your Telephone number is required"),
  message: Yup.string()
    .max(250, "Must be 250 characters or less")
    .required("Your message is required"),
});

export default Validation;
