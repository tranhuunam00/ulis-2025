// Import React
import React, { useState } from "react";
import "./Input.css"; // Import CSS for styles

const BeautifulInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="beautiful-input"
        value={value}
        onChange={handleChange}
        required
      />
      <label className={value ? "filled" : ""}>
        Vui lòng nhập thông tin cần tìm
      </label>
    </div>
  );
};

export default BeautifulInput;
