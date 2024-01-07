import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled, { createGlobalStyle } from "styled-components";

const Pointer = () => {
  const cursorRef = useRef(null!);

  const animateEnter = () => {
    cursorRef.current.classList.add("active");
  };
  const animateExit = () => {
    cursorRef.current.classList.remove("active");
  };

  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      cursorRef.current.style.left = e.x + "px";
      cursorRef.current.style.top = e.y + "px";
    });

    const elementsWithId = document.querySelectorAll("#int1");

    elementsWithId.forEach((element) => {
      element.addEventListener("mouseenter", () => animateEnter());
      element.addEventListener("mouseleave", () => animateExit());
    });
  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      <GlobalStyle />

      <div>
        <div
          style={{ width: 100, height: 100, background: "red" }}
          id="int1"
        ></div>
        <div
          style={{ width: 100, height: 100, background: "blue" }}
          id="int2"
        ></div>
      </div>
    </>
  );
};

export default Pointer;

const Cursor = styled.div`
  width: 10px;
  height: 10px;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid blue;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.2s ease-in-out, width 0.2s ease-in-out,
    height 0.2s ease-in-out;
  background: blue;

  &.active {
    width: 50px;
    height: 50px;
    background: transparent;
  }
`;

const GlobalStyle = createGlobalStyle`
body, html {
  cursor: none;
}
`;
