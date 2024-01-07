import React from "react";
import styled from "styled-components";
import { useAnimationContext } from "../context/Animation";

const CloseCircle = () => {
  const { backCircleRef, animateComputer } = useAnimationContext();
  return (
    <CloseCircleContainer
      ref={backCircleRef}
      onClick={() => animateComputer(0)}
    >
      Back
    </CloseCircleContainer>
  );
};

export default CloseCircle;

const CloseCircleContainer = styled.div`
  position: absolute;
  height: 160px;
  width: 160px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 50%;
  top: 100px;
  left: 100px;
  transform: translate(-50%, -50%);
  transition: height 0.3s, width 0.3s, top 0.3s, left 0.3s;
  cursor: pointer;

  &:hover {
    height: 180px;
    width: 180px;
  }
`;
