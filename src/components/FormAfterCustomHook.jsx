import React, { useState } from "react";
// bring in the new reusable hook function
import useForm from "./useForm";

const Form = () => {
  //  destructure the values from useForm
  // the callback here is the submit, so pass it into useForm; so it will do the same behavior as the callback in the other function
  // now that these values have been brought in from our customHook, we can reuse them wherever
  const { handleChange, handleSubmit, values } = useForm(submit);

  // only function above the return now is this submit
  // before this would have been an enormous class function
  // then a smaller hooks function,
  // but now an incredibly short customHook
  // compare the 2 files for demo
  function submit() {
    console.log("Submitted Successfully");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <h1>The below form will demonstrate the Custom Hook</h1>
        <label>Email</label>
        <div>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {/* {eroor message here } */}
        </div>
        <label>Password</label>
        <div>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          {/* {eroor message here } */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
