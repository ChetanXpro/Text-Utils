import React, { useState } from "react";

function TextForm(props) {
  let count;
  const HandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandlelwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const HandleonChange = (event) => {
    setText(event.target.value);
  };
  const Handlecopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const Handlespace = () => {
    let newtext = text.split(/[ ]+/);

    setText(newtext.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <div>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={HandleonChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2  my-1" onClick={HandleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={HandlelwClick}>
          Convert to Lowercase
        </button>
        <button
          id="copy"
          className="btn btn-primary mx-2 my-1"
          onClick={Handlecopy}
        >
          Copy text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={Handlespace}>
          Remove extra space
        </button>
      </div>
      <div className="container my-2">
        <h1>Your total words</h1>
        <p>
          {
            text.split(" ").filter((i) => {
              return i.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
    </div>
  );
}

export default TextForm;
