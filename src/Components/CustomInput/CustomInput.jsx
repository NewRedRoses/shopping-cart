import { useState } from "react";

const CustomInput = ({ type = "text", startVal, min, max }) => {
  const [value, setValue] = useState(startVal);
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      min={min}
      max={max}
    />
  );
};

export default CustomInput;
