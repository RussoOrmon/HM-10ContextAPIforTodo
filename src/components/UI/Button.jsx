import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...restProps
}) => {
  return (
    <Container  borderStyle={borderStyle} variant={variant}  {...restProps} >
      {children}
    </Container>
  );
};
export default Button;

const getBackground = (props) => {
  return props.variant === "contained" ? "#8A2B06" : "#ffffff";
};
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8A2B06";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#ffffff" : "#8A2B06";
};
const getBorderRadius = (props) => {
  return props.variant === "rounded" ? "20px" : "6px";
};

const Container = styled.button`
  background: ${getBackground};
  padding: 10px 32px;
  color: ${getColor};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: ${getBorderRadius};
  border: ${getBorder};
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #7e2a0a;
    color: #ffffff;
  }

  &:active {
    background-color: #993108;
  }

  &:disabled {
    background-color: #cac6c4;
  }
`;
