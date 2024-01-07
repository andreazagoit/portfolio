import {
  ContactShadows,
  Environment,
  Float,
  Html,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useAnimationContext } from "../context/Animation";
import Container from "./Container";

const ComputerScene = () => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const { computerRef, computerState } = useAnimationContext();

  return (
    <Container style={{ height: "100dvh", width: "100%" }}>
      <Canvas
        style={{ touchAction: "none" }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
        }}
      >
        <color args={["#fff"]} attach="background" />

        <Environment preset="city" />

        <Float rotationIntensity={0} enabled={false}>
          {/* <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
          /> */}

          <primitive
            ref={computerRef}
            object={computer.scene}
            position-x={computerState.position.x}
            position-y={computerState.position.y}
            position-z={computerState.position.z}
            rotation-x={computerState.rotation.x}
            rotation-y={computerState.rotation.y}
            rotation-z={computerState.rotation.z}
          >
            <Html
              zIndexRange={[8, 9]}
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                style={{
                  width: 1024,
                  height: 670,
                  border: "none",
                  borderRadius: 20,
                  background: "#000000",
                }}
                src="https://andreazago.it/curriculum.pdf"
              />
            </Html>
          </primitive>

          {/* <Text
              fontSize={1}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
              maxWidth={2}
            >
              BRUNO SIMON
            </Text> */}
        </Float>

        <ContactShadows position-y={-1.8} opacity={0.4} scale={20} blur={2.4} />
      </Canvas>
    </Container>
  );
};

export default ComputerScene;
