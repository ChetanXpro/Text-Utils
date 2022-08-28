import React, { useState } from "react";

export default function About(props) {
  let myStyle = { color: props.mode === "dark" ? "white" : "black" };
  return (
    <>
      <div classNameName="container">
        <h1 style={myStyle}>About us</h1>
        <h3 style={myStyle}>Your main developer utilities repository!</h3>
        <p style={myStyle}>
          Fast, reliable, and easy! Text-Utils brings several free online tools
          to assist developers in daily tasks.
        </p>
      </div>
    </>
  );
}
