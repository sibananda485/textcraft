import React from "react";
import "./about.css";

export default function About(props) {
  return (
    <>
      <div className="container">
        <header
          style={
            props.mode === "light"
              ? { color: "white", background: "black" }
              : { color: "black", background: "white" }
          }
        >
          <h1>About TextUtils</h1>
        </header>

        <section>
          <h2
            style={
              props.mode === "light" ? { color: "black" } : { color: "white" }
            }
          >
            Our Mission
          </h2>
          <p>
            At TextUtils, our mission is to empower users with powerful and
            easy-to-use tools for working with text. Whether you're a writer,
            developer, student, or just someone who deals with text on a regular
            basis, TextUtils is here to simplify and enhance your text-related
            tasks.
          </p>
        </section>

        <section>
          <h2
            style={
              props.mode === "light" ? { color: "black" } : { color: "white" }
            }
          >
            Key Features
          </h2>
          <ul>
            <li>
              <strong>Text Manipulation:</strong> Easily manipulate text with
              functions like case conversion, find and replace, and more.
            </li>
            <li>
              <strong>Word Count:</strong> Get accurate word counts for your
              documents or snippets.
            </li>
            <li>
              <strong>Character Count:</strong> Find out how many characters are
              in your text, including or excluding spaces.
            </li>
            <li>
              <strong>Text Analysis:</strong> Analyze the sentiment of your
              text, extract keywords, and gain insights into the language used.
            </li>
          </ul>
        </section>

        <section>
          <h2
            style={
              props.mode === "light" ? { color: "black" } : { color: "white" }
            }
          >
            Why Choose TextUtils?
          </h2>
          <ul>
            <li>
              <strong>User-Friendly:</strong> Our interface is designed with
              simplicity in mind, ensuring that both beginners and experts can
              navigate the tools effortlessly.
            </li>
            <li>
              <strong>Fast and Efficient:</strong> TextUtils is built to deliver
              speedy results, allowing you to save time on text-related tasks.
            </li>
            <li>
              <strong>Privacy and Security:</strong> We prioritize the privacy
              and security of your data. Your text is processed on-the-fly, and
              we do not store any sensitive information.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
