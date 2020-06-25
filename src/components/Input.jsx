import React, { useState } from "react";

const Input = () => {
  // the 'age' below is simliar to the this.state.count previously called in the jsx
  // the 'setAge' below is smiliar to the setState previously called above the render
  // these two arguments are not direct translations of the way it used to work, but together they activate each other to equal the former this.state and the this.setState
  // the value inside the useState() is the initial state value
  const [age, setAge] = useState(36);
  // you can declare multiple state variables on separate lines, or the same
  const [name, setName] = useState("");
  const [familyMembers, setFamilyMembers] = useState([{ name: "" }]);

  // Or you can just do them all at once....
  // const [personalInfo, setState] = useState({
  //   age: 36,
  //   name: "",
  //   familyMembers: [{ name: "" }],
  // });
  // but if you do this then you have to change each state every time just one state changes, by passing in the spead operation
  // and you still have to use setState; so most hooks people prefer the first way of breaking them apart
  // it also has more implications on how you do the functions directly in the html; have to break them apart again above the return
  // one quick example below is commented out
  // show state in the react components inspect
  // const updateFieldsTogether = (event) => {
  //   setState({
  //     ...personalInfo,
  //     [event.target.name]: event.target.value,
  //   });
  // };
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
      {/* <p>What is your name?</p>
      <input value={personalInfo.name} onChange={updateFieldsTogether} />
      <p>Who are the members of your family?</p> */}
    </div>
  );
};

export default Input;
