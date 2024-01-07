import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 30px;
  height: 48px;
  cursor: pointer;
  border: 2px solid red;
  background: red;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  font-size: 1rem;

  &:hover {
    background: transparent;
    color: red;
  }
`;

export default Button;
