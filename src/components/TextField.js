import React from "react";
import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="fields">
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
    </div>
  );
};

export default TextField;
