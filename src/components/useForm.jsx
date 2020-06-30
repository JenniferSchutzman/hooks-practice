import React, { useState } from "react";

// take all the same logic above the return from the previous form
// this function will now be imported into the functional component <Form />

const useForm = (callback) => {
  // useState is the setter to update the object
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,

      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit();
    // generically change it from the specific submit() to a broader callback() that is passed into the function (just the param name)
    // the callback() will be the submit() in the <Form /> component
    callback();
  };

  // pass the functions through the return
  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
