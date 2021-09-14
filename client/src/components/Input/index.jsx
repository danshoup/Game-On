import React from "react";
import "./Input.css";

class Input extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`input-5 ${className || ""}`}>
        <div className="email-1 arial-regular-normal-dodger-blue-15px">{children}</div>
        <div className="rectangle-135 border-1px-sail"></div>
      </div>
    );
  }
}

export default Input;
