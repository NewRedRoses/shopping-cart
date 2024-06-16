import { useState } from "react";

const CustomInput = ({ type = "text", value, setValue, min, max }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
      min={min}
      max={max}
    />
  );
};

export default CustomInput;
