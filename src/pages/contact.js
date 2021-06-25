import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const contact = () => {
  return (
    <Layout>
      <div className="contact-page-wrap">
        <iframe
          title="topfix"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19887.101136202415!2d-2.585676027062345!3d51.46021932187252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f6d3ce2d293f%3A0x7ec9f06531201b88!2sTopfix%20Interiors%20Ltd!5e0!3m2!1sen!2suk!4v1622211935162!5m2!1sen!2suk"
          width="800"
          height="600"
          allowfullscreen=""
          loading="lazy"></iframe>
        <div className="contact-form">
          <p>
            Fill out the form below and we will contact you within 24 hours.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              company: "",
              tel: "",
              message: "",
            }}
            // validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({
                  "form-name": "contact",
                  ...values,
                }),
              })
                .then(() => {
                  // this.props.history.push('/success')
                  alert("Success");
                  setSubmitting(false);
                })
                .catch((error) => {
                  alert("Error: Please Try Again!");
                  setSubmitting(false);
                });
            }}
            render={({ touched, errors, isSubmitting, handleSubmit }) => (
              <form
                name="contact"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/success">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-inputs">
                  <div className="input-wrap">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" label="name" />
                    {touched.name && errors.name && (
                      <p className="danger">{errors.name}</p>
                    )}
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" id="email" label="email" />
                    {touched.email && errors.email && (
                      <p className="danger">{errors.email}</p>
                    )}
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="company">Company</label>
                    <Field
                      type="text"
                      name="company"
                      id="company"
                      label="company"
                    />
                    {touched.company && errors.company && (
                      <p className="danger">{errors.company}</p>
                    )}
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="tel">Tel</label>
                    <Field type="text" name="tel" id="tel" label="tel" />
                    {touched.tel && errors.tel && (
                      <p className="danger">{errors.tel}</p>
                    )}
                  </div>
                </div>
                <div className="message-form">
                  <label htmlFor="message">Message</label>
                  <Field
                    className="text-area"
                    name="message"
                    component="textarea"
                    id="message"
                    rows="6"
                  />
                  {touched.message && errors.message && (
                    <p className="danger">{errors.message}</p>
                  )}
                </div>
                <div className="form-buttons">
                  <button
                    name="submit"
                    type="submit"
                    disabled={isSubmitting}
                    value="Submit">
                    <span> Submit</span>
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </Layout>
  );
};

export default contact;
