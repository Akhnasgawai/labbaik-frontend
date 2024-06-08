import React from "react";
import styled, { css } from "styled-components";

const buttonStyles = css`
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  width: 100%;
`;

const PrimaryButton = styled.button`
  ${buttonStyles}
  background-color: var(--text-color);
  color: white;
`;

const SecondaryButton = styled.button`
  ${buttonStyles}
  background-color: var(--tertiary-color);
  color: black;
`;

const Button = ({ variant = "primary", children, ...rest }) => {
  if (variant === "primary") {
    return <PrimaryButton {...rest}>{children}</PrimaryButton>;
  } else if (variant === "secondary") {
    return <SecondaryButton {...rest}>{children}</SecondaryButton>;
  }
};

export default Button;
