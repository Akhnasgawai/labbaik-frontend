import React from "react";
import styled from "styled-components";

// Define a styled input component
const StyledInput = styled.input`
  width: 100%;
  padding: 7px 11px;
  border-radius: 6px;
  border: 0.1px solid #e6e6e6;
  font-size: 14px;
  background-color: var(--placeholder-color);
  /* Add any additional styling here */
`;

// Define a styled label component
const Label = styled.label`
  display: block;
  margin-bottom: 0.1rem;
  font-weight: bold;
  color: var(--text-color)
  /* Add any additional styling here */
`;

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  disabled = false,
  required = false,
  name = "",
  className = "",
  id = "",
  maxLength,
  minLength,
  readOnly = false,
  autoFocus = false,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        name={name}
        className={className}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Input;
