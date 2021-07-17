import React from "react";
import { navigate } from "gatsby-link";
// import Layout from '../layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br />
          <input type="text" name="name" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br />
          <input type="email" name="email" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your company:
          <br />
          <input type="text" name="company" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your telephone:
          <br />
          <input type="text" name="telephone" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Message:
          <br />
          <textarea name="message" onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}

// import React from "react";
// import { navigate } from "gatsby-link";
// import { Formik, Form } from "formik";
// import TextField from "../components/TextField";
// import MessageField from "../components/MessageField";
// import * as Yup from "yup";

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// const ContactForm = () => {
//   const [state, setState] = React.useState({});

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const validate = Yup.object({
//     name: Yup.string()
//       .max(30, "Must be 30 characters or less")
//       .required("Your name is required"),
//     email: Yup.string()
//       .email("Email is invalid")
//       .required("Your email is required"),
//     company: Yup.string()
//       .max(30, "Must be 30 characters or less")
//       .required("Your company name is required"),
//     telephone: Yup.string()
//       .max(30, "Must be 30 characters or less")
//       .required("Your Telephone number is required"),
//     message: Yup.string()
//       .max(250, "Must be 250 characters or less")
//       .required("Your message is required"),
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": form.getAttribute("name"),
//         // ...state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute("action")))
//       .catch((error) => alert(error));
//   };

//   return (
//     <Formik
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//       }}
//       validationSchema={validate}
//       // onSubmit={handleSubmit}
//       onSubmit={console.log(initialValues)}>
//       {(formik) => (
//         <div className="form">
//           <Form
//             name="contact"
//             method="post"
//             data-netlify="true"
//             data-netlify-honeypot="bot-field">
//             <input type="hidden" name="form-name" value="contact" />
//             <p hidden>
//               <label>
//                 Don’t fill this out:{" "}
//                 <input name="bot-field" onChange={handleChange} />
//               </label>
//             </p>
//             <div className="contact-details">
//               <TextField
//                 label="Name"
//                 name="name"
//                 type="text"
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Company"
//                 name="company"
//                 type="text"
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Telephone"
//                 name="telephone"
//                 type="text"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="contact-message">
//               <MessageField label="Message" name="message" type="textarea" />
//             </div>
//             <div className="button-wrap">
//               <button type="submit">Submit</button>
//               {/* <button type="reset">Reset</button> */}
//             </div>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   );
// };

// export default ContactForm;
