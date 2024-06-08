import React from "react";
import Select from "react-select";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 0.1rem;
  font-weight: bold;
  color: var(--text-color);
  /* Add any additional styling here */
`;

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? " #0e46a3" : "#fff",
    color: state.isSelected ? "#fff" : "#000",
    "&:hover": {
      backgroundColor: state.isSelected ? " #0e46a3" : "#cce5ff", // Change color when hovered
    },
  }),
};

const SelectField = ({ options, value, label, onChange, name }) => {
  const selectedOption =
    options.find((option) => option.value === value) || null;
  return (
    <div>
      <Label>{label}</Label>
      <Select
        options={options}
        name={name}
        value={selectedOption}
        onChange={onChange}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#28a745", // Color of the selected option
          },
        })}
      />
    </div>
  );
};

export default SelectField;
