import React, { useState } from "react";

export default function Text(props) {
  const [text1, text2] = useState("");
  const chF = (event) => {
    text2(event.target.value);
  };
  const upF = () => {
    if (text1.length <= 0) {
      props.fun("danger", "Please Enter some text");
    } else {
      text2(text1.toUpperCase());
      props.fun("success", "Converted to uppar case");
    }
  };
  const loF = () => {
    if (text1.length <= 0) {
      props.fun("danger", "Please Enter some text");
    } else {
      text2(text1.toLowerCase());
      props.fun("success", "Converted to lower case");
    }
  };
  const clF = () => {
    if (text1.length <= 0) {
      props.fun("warning", "Text already cleared");
    } else {
      text2("");
      props.fun("danger", "Text cleared");
    }
  };
  return (
    <div className="form-floating container mt-2">
      <h1
        style={props.mode === "light" ? { color: "black" } : { color: "white" }}
        id="1"
      >
        Enter some text
      </h1>
      <textarea
        id="text"
        className="form-control"
        placeholder="Leave a comment here"
        value={text1}
        onChange={chF}
        style={
          props.mode === "dark"
            ? { backgroundColor: "#00082c", height: "200px", color: "white" }
            : { backgroundColor: "white", height: "200px", color: "#000318" }
        }
      ></textarea>
      <button className="btn btn-success mt-3 me-3" onClick={upF}>
        Uppar Case
      </button>
      <button className="btn btn-primary mt-3 me-3" onClick={loF}>
        Lower Case
      </button>
      <button className="btn btn-warning mt-3 me-3" onClick={clF}>
        Clear
      </button>
      <h2
        style={props.mode === "light" ? { color: "black" } : { color: "white" }}
        className="mt-5"
      >
        Summary
      </h2>
      <p>
        Your text has {text1.length} character and {text1.split(" ").length}{" "}
        words
      </p>
      <h2
        style={props.mode === "light" ? { color: "black" } : { color: "white" }}
        className="mt-5"
      >
        Preview
      </h2>
      <p
        id="myPara"
        className="p-2 "
        style={
          props.mode === "dark"
            ? { border: "1px solid gray", borderRadius: "4px" }
            : { border: "2px solid gray", borderRadius: "4px" }
        }
      >
        {text1.length <= 0 ? "Enter somethings in textbox to preview" : text1}
      </p>
    </div>
  );
}
