import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="fields">
      <label htmlFor={field.name}>{label}</label>
      <textarea {...field} {...props} />

      <ErrorMessage component="p" name={field.name} />
    </div>
  );
};

export default TextField;
