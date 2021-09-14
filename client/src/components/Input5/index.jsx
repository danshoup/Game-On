import React from "react";
import "./Input5.css";

class Input5 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`input-2 ${className || ""}`}>
        <div className="full-name arial-regular-normal-dodger-blue-15px">{children}</div>
        <div className="rectangle-122 border-1px-sail"></div>
      </div>
    );
  }
}

export default Input5;
