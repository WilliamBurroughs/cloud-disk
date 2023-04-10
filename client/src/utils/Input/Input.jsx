import React from "react";
import "./Input.scss";
const Input = (props) => {
  return (
    <div className="input">
      <input
        onChange={(event) => props.setValue(event.target.value)}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
