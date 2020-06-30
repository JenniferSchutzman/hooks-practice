// NEED NEW EXAMPLE WITH EMPTY DEPENDENCIES ARRAY

import React, { useState, useEffect } from "react";

const Counter = () => {
  // 1ST EXAMPLE === BASIC USEEFFECT FUNCTIONALITY ON MOUNT
  // const [age, setAge] = useState(36);

  // 2ND EXAMPLE === UNMOUNT AND MOUNT
  // const [random, setRandom] = useState(Math.random());
  // // note that mounted is set default to true
  // const [mounted, setMounted] = useState(true);
  // const reRender = () => setRandom(Math.random());
  // const toggle = () => setMounted(!mounted);

  // 3RD EXAMPLE === DEPENDENCIES ARRAY
  // for the dependencies array example
  const [someValue, setSomeValue] = useState();

  // 1ST EXAMPLE === BASIC USEEFFECT FUNCTIONALITY ON MOUNT
  // useEffect(() => {
  //   // updates the document titls using the browser API
  //   // this would otherwise have been in both componentDidMount & componentDidUpdate
  //   document.title = `You are ${age} years old`;
  //   //
  // });

  // 2ND EXAMPLE === UNMOUNT AND MOUNT
  // EXAMPLE OF HOW USEEFFECT RENDERS DIFFERENTLY - MOUNT AND UNMOUNT TOGETHER
  // const LifecycleDemo = () => {
  //   // It takes a function
  //   useEffect(() => {
  //     // this gets called after every render, by default
  //     // (the first one, and every one after that) - like componentDidMount
  //     console.log("render!");

  //     //If you want to implement componentWillUnmount,
  //     // return a function from here, and React will call it prior to unmounting.
  //     return () => console.log("unmounting....");
  //   });
  //   return "I'm a lifecycle demo";
  // };

  // 3RD EXAMPLE === DEPENDENCIES ARRAY
  // EXAMPLE OF USEEFFECT WITH DEPENDENCIES ARRAY - be sure to uncomment the first example bc activating the same document.title
  useEffect(() => {
    // updates the document title using the browser API
    // this would otherwise have been in both componentDidMount & componentDidUpdate
    // with the age example, it had a default age.  If I removed the default age, it would still populate the document.title as undefined
    // but here it won't populate until you give it 'someValue'
    document.title = someValue;
  }, [someValue]);

  return (
    // see that we can now refer directly to 'count' without the 'this' in the functional or the 'this.state.' of the class components
    <div>
      {/* <div>
        <button onClick={() => setAge(age + 1)}>
          1st example --- Click me to increase your age
        </button>
      </div> */}
      {/* <div>
        <p>
          2nd example --- The first button shows how the useEffect runs every
          time before that effect runs (to clean up from the last run) and also
          when unmounted{" "}
        </p>
        <button onClick={reRender}>Re-render</button>
        <button onClick={toggle}> Show/Hide LifecycleDemo</button>
        {mounted && <LifecycleDemo />}
      </div> */}
      <div>
        <p>
          {" "}
          3rd example --- fill in a value here to activate the dependencies
          array
        </p>
        <input
          value={someValue}
          onChange={(event) => setSomeValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Counter;
