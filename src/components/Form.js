import React from "react";
import { Formik, Form } from "formik";
import TextField from "../components/TextField";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}>
      {(formik) => (
        <div className="form">
          {console.log(formik)}
          <Form>
            <div className="contact-details">
              <TextField label="Name" name="name" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Company" name="company" type="text" />
              <TextField label="Telephone" name="telephone" type="text" />
            </div>
            <div className="contact-message">
              <TextField label="Message" name="message" type="text" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
