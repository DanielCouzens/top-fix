import React from "react";
import { navigate } from "gatsby-link";
import { Formik, Field } from "formik";
import validation from "./Validation";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Forms = () => {
  return (
    <div className="contact-form">
      <Formik
        initialValues={{
          name: "",
          email: "",
          telephone: "",
          company: "",
          message: "",
        }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
            action="/thanks/">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact-details">
              <div className="fields">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                {touched.name && errors.name && (
                  <p className="danger">{errors.name}</p>
                )}
              </div>
              <div className="fields">
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" id="email" />
                {touched.email && errors.email && (
                  <p className="danger">{errors.email}</p>
                )}
              </div>
              <div className="fields">
                <label htmlFor="company">Company</label>
                <Field type="text" name="company" id="company" />
                {touched.company && errors.name && (
                  <p className="danger">{errors.company}</p>
                )}
              </div>
              <div className="fields">
                <label htmlFor="telephone">Telephone</label>
                <Field type="text" name="telephone" id="telephone" />
                {touched.telephone && errors.email && (
                  <p className="danger">{errors.telephone}</p>
                )}
              </div>
            </div>
            <div className="contact-message">
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
                value="SUBMIT">
                SUBMIT
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Forms;

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// export default function Contact() {
//   const [state, setState] = React.useState({});

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": form.getAttribute("name"),
//         ...state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute("action")))
//       .catch((error) => alert(error));
//   };

//   return (
//     <div className="contact-form-wrap">
//       <Formik method="post" validationSchema={validation}>
//         <form
//           action="/thanks/"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           name="contact"
//           onSubmit={handleSubmit}>
//           {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//           <input type="hidden" name="form-name" value="contact" />
//           <p hidden>
//             <label>
//               Don’t fill this out:{" "}
//               <input name="bot-field" onChange={handleChange} />
//             </label>
//           </p>
//           <div className="contact-details">
//             <label>
//               Your name:
//               <br />
//               <Field type="text" name="name" onChange={handleChange} />
//               <ErrorMessage component="p" name="name" />
//             </label>

//             <label>
//               Your email:
//               <br />
//               <Field type="email" name="email" onChange={handleChange} />
//               <ErrorMessage component="p" name="email" />
//             </label>

//             <label>
//               Your company:
//               <br />
//               <Field type="text" name="company" onChange={handleChange} />
//               <ErrorMessage component="p" name="company" />
//             </label>

//             <label>
//               Your telephone:
//               <br />
//               <Field type="text" name="telephone" onChange={handleChange} />
//               <ErrorMessage component="p" name="telephone" />
//             </label>
//           </div>

//           <label>
//             Message:
//             <br />
//             <textarea name="message" onChange={handleChange} />
//             <ErrorMessage component="p" name="message" />
//           </label>

//           <button type="submit">Send</button>
//         </form>
//       </Formik>
//     </div>
//   );
// }
