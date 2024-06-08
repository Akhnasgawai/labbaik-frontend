import React from "react";
import styled from "styled-components";

const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RadioButtonLabel = styled.label`
  margin-right: 10px;
`;

const RadioButtonInput = styled.input`
  display: none;
`;

const RadioButtonButton1 = styled.div`
  display: inline-block;
  padding: 5px 25px;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid #28a745;
  background-color: ${({ active }) => (active ? "#28a745" : "")};
  color: ${({ active }) => (active ? "white" : "#28a745")};
`;
const RadioButtonButton2 = styled.div`
  display: inline-block;
  padding: 5px 25px;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid #dc3545;
  background-color: ${({ active }) => (active ? "#dc3545" : "")};
  color: ${({ active }) => (active ? "white" : "#dc3545")};
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 0.1rem;
  align-items: center;
  letter-spacing: 2px;

  /* Add any additional styling here */
`;

const RadioButtonsWrapper = styled.div`
  display: flex;
  margin-left: 10px; /* Add some space between label and buttons */
`;

const RadioButton = ({
  name,
  label,
  value1 = "Yes",
  value2 = "No",
  checked,
  onChange,
}) => {
  return (
    <RadioButtonContainer className="my-4">

        <Label>{label}</Label>

        <RadioButtonsWrapper>
          <RadioButtonLabel>
            <RadioButtonInput
              type="radio"
              name={name}
              value={value1}
              checked={checked === value1}
              onChange={onChange}
            />
            <RadioButtonButton1 active={checked === value1}>
              {value1}
            </RadioButtonButton1>
          </RadioButtonLabel>
          <RadioButtonLabel>
            <RadioButtonInput
              type="radio"
              name={name}
              value={value2}
              checked={checked === value2}
              onChange={onChange}
            />
            <RadioButtonButton2 active={checked === value2}>
              {value2}
            </RadioButtonButton2>
          </RadioButtonLabel>
        </RadioButtonsWrapper>
      
    </RadioButtonContainer>
  );
};

export default RadioButton;
