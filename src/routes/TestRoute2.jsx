import clsx from "clsx";
import React, { useState } from "react";
import "../styles/testroute2.css";
const TestRoute2 = () => {
  const [validate, setValidate] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    if (inputValue !== "") {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        className={clsx({
          validated: validate,
          "not-valid": !validate,
        })}
      />
      <button onClick={handleClick}>Validate</button>
    </div>
  );
};

export default TestRoute2;
