import React from "react";
import { Formik, Form } from "formik";
import TextField from "../components/TextField";
import MessageField from "../components/MessageField";
import * as Yup from "yup";

const ContactForm = () => {
  const validate = Yup.object({
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

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit>
      {(formik) => (
        <div className="form">
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact-details">
              <TextField label="Name" name="name" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Company" name="company" type="text" />
              <TextField label="Telephone" name="telephone" type="text" />
            </div>
            <div className="contact-message">
              <MessageField label="Message" name="message" type="textarea" />
            </div>
            <div className="button-wrap">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
