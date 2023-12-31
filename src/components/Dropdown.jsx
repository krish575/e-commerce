import React from "react";
import Loader from "./Loader";

const Dropdown = ({ data, onChange, ...props }) => {
  // here the data we're going to receive will/must be an array of string.
  // select tag works mainly on onChange().
  // we get the selected value by using e.target.value
  // to push out the selected value we using a function as a property of the component to be called outside of it. we passed the selected value into the function to be accessed outside the component.
  if (data.length === 0) {
    return <Loader />;
  } else {
    return (
      <select
        name="filterCategory"
        id="filterCategory"
        onChange={(event) => {
          console.log(event.target.value);
          onChange(event.target.value);
        }}
        {...props}
      >
        {data
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((option, index) => (
            <option key={index} value={`${option}`}>
              {option}
            </option>
          ))}
      </select>
    );
  }
};

export default Dropdown;
