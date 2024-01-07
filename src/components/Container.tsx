import React from "react";
import styled from "styled-components";

interface IProps {
  maxWidth?: number;
}

/* const Container = ({ children, maxWidth = 1200 }: IProps) => {
  return <div style={{ maxWidth, margin: "0 auto" }}>{children}</div>;
}; */

const Container = styled.div<IProps>`
  max-width: ${(props) => `${props.maxWidth ? props.maxWidth : 1440}px`};
  margin: 0 auto;
`;

export default Container;
