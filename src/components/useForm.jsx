import React, { useState } from "react";

// take the logic from the previous form
// this function will now be imported into the functional component <Form />
const useForm = (callback) => {
  // useState is the setter to update the object
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setValues({
      ...values,

      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit();
    // generically change it from the specific submit() to a broader callback()
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
