import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Mesh } from "three";
import HomePage from "./pages/HomePage";

// GSAP
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: Helvetica, sans-serif;
  font-size: 16px;
}
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const CanvasContainer = styled.div`
  height: 300px;
  width: 500px;
  background: blue;

  &:hover {
    width: 700px;
    transition: 1s all;
  }
`;

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
