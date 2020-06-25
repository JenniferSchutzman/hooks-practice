import React, { useState, useEffect } from "react";

const Counter = () => {
  // the 'age' below is simliar to the this.state.count previously called in the jsx
  // the 'setAge' below is smiliar to the setState previously called above the render
  // these two arguments are not direct translations of the way it used to work, but together they activate each other to equal the former this.state and the this.setState
  // the value inside the useState() is the initial state value
  const [age, setAge] = useState(36);
  // you can declare multiple state variables on separate lines, or the same
  const [name, setName] = useState("");
  const [familyMembers, setFamilyMembers] = useState([{ name: "" }]);
  // this state is for second the useEffect example
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);
  // for the dependencies array example
  const [someValue, setSomeValue] = useState();

  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(!mounted);

  // Or you can just do them all at once....

  // but if you do this then you have to change each state every time just one state changes, by passing in the spead operation

  // EXAMPLE OF BASIC USEEFFECT FUNCTIONALITY ON MOUNT
  useEffect(() => {
    // updates the document titls using the browser API - this would otherwise have been in both componentDidMount & componentDidUpdate
    document.title = `You are ${age} years old`;
    //
  });

  // EXAMPLE OF HOW USEEFFECT RENDERS DIFFERENTLY
  // const LifecycleDemo = () => {
  //   // It takes a function
  //   useEffect(() => {
  //     // this gets called after every render, by default
  //     // (the first one, and every one after that)
  //     console.log("render!");

  //     //If you want to implement componentWillUnmount,
  //     // return a function from here, and React will call it prior to unmounting.
  //     return () => console.log("unmounting....");
  //   });
  //   return "I'm a lifecycle demo";
  // };

  // EXAMPLE OF USEEFFECT WITH EMPTY ARRAY (MOUNT AND UNMOUNT SEPARATE)
  // if you only want it to run on mount and unmount, give it an empty array
  // this will make it print mounted on the render, then remain silent until unmounting
  // useEffect(() => {
  //   console.log("mounted");
  //   return () =>
  //     console.log(
  //       "unmounting oinoinoioinoibnoibnoinoinoinoinoinoinoinoinoinoin..."
  //     );
  // }, []);

  // EXAMPLE OF USEEFFECT WITH DEPENDENCIES ARRAY - be sure to uncomment the first example
  // useEffect(() => {
  //   // updates the document titls using the browser API - this would otherwise have been in both componentDidMount & componentDidUpdate
  //   document.title = someValue;
  // }, [someValue]);

  // EXAMPLE OF USEREF
  // const refContainer = useRef(initialValue);

  // EXAMPLE OF USECALLBACK

  // EXAMPLE OF CUSTOM HOOK

  return (
    // see that we can now refer directly to 'count' without the 'this' in the functional or the 'this.state.' of the class components
    <div>
      <p>You are {age} years old</p>
      <button onClick={() => setAge(age + 1)}>
        Click me to increase your age
      </button>
      <p>What is your name?</p>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>Who are the members of your family?</p>
      <input
        value={familyMembers.name}
        onChange={(event) => setFamilyMembers(event.target.value)}
      />
      {/* <p>
        The first button shows how the useEffect runs every time before that
        effect runs (to clean up from the last run) and also when unmounted{" "}
      </p>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}> Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo />} */}
      <p>fill in a value here to activate the dependencies array</p>
      <input
        value={someValue}
        onChange={(event) => setSomeValue(event.target.value)}
      />
    </div>
  );
};

export default Counter;

// import React, {Component} from 'react';

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return (
//       <div>
//         <p> You clicked {this.state.count} times </p>
//         <button onClick={() => this.setState({count: this.state.count + 1})}>
//           Click Me
//         </button>
//       </div>
//     )
//   }
// }

// export default Counter;
