// 1. You must create a function
// 2. Function names should start with uppercase letter
// 3. Function should contain a top level return statement
// with atleast single tag
// 4. Function should be exported and then added to the App.js file

import React from "react";
import "./Home.css";

const Home = () => {
  let myhobbies = "Coding & Gaming";

  const btnStyles = {
    background: "red",
    borderRadius: "5px",
    border: "none",
    color: "white",
    padding: "10px",
    boxShadow: "2px 2px 2px 1px #00000055",
  };

  const btn1 = (
    <button style={{ background: "green", color: "white", padding: "10px" }}>
      A Custom Button
    </button>
  );

  const btn2 = <button style={btnStyles}>Another Button</button>;

  return (
    <div>
      {btn1}
      <h1 className="mytext">Home Component</h1>
      <h2>{myhobbies}</h2>
      {btn1}
      {btn2}
    </div>
  );
};

export default Home;