import React from "react";
import logo from "./logo.svg";

import Counter from "./components/Counter.jsx";

import Input from "./components/Input.jsx";

import Form from "./components/FormBeforeCustomHook.jsx";
//import Form from "./components/FormAfterCustomHook.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Input />
      {/* <Counter /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
