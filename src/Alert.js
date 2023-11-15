import React from "react";

export default function Alert(props) {
  return (
    <div
      className={`alert alert-${props.message.a} alert-dismissible fade show mt-2 `}
      role="alert"
    >
      {props.message.b}
    </div>
  );
}
