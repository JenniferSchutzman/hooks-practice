import React, { useState } from "react";

// https://www.youtube.com/watch?v=SXIfnNvYrZE

// BEFORE CUSTOM HOOKS - the file using the customHooks should start with "use"
// so see "useForm.jsx" - will put together in FormAfterCustomHook

const Form = () => {
  // useState is the setter to update the object
  const [values, setValues] = useState({ email: "", password: "" });

  // set up the callback
  const handleChange = (event) => {
    // desstructuring for less code in the function
    const { name, value } = event.target;

    console.log(name);
    console.log(value);
    // we have to copy the values of all the states here because changes all each time
    // and then set the values of the specific ones we want to change
    // this is why we use the spread operator here
    setValues({
      ...values,
      // this will set the name equal to the key
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    // prevent the default behavior of the browser refreshing.
    // not refreshing bc we want to keep control over what is happening with the page
    event.preventDefault();
    submit();
  };

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
