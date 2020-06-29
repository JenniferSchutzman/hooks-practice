import React from "react";
// remove the useState

// bring in the new reusable hook function -- > first go check out the new useForm function
import useForm from "./useForm";

// only function above the return now is this submit
// before this would have been an enormous class function
// then a smaller hooks function,
// but now an incredibly short customHook

//  destructure the values from useForm
// the callback here is the submit, so pass it into useForm; so it will do the same behavior as the callback in the other function
// now that these values have been brought in from our customHook, we can reuse them wherever
const Form = () => {
  const { handleChange, handleSubmit, values } = useForm(submit);

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
        </div>
        <label>Password</label>
        <div>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
