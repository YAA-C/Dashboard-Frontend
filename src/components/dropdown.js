import React, { useState } from "react";

const Dropdown = ({ total, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  const options = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div>
      <label htmlFor="dropdown" className="m-2 fw-bold">
        Select a fight number:{" "}
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
