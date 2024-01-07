import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { useAnimationContext } from "../context/Animation";

const ThreePage = () => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const { computerRef, computerState, setComputerState } =
    useAnimationContext();

  return (
    <div
      style={{ height: "100dvh", position: "fixed", width: "100%", zIndex: -1 }}
    >
      <Canvas
        style={{ touchAction: "none" }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          /* position: [-3, 1.5, 4], */
        }}
      >
        <color args={["#241a1a"]} attach="background" />

        <Environment preset="city" />

        <PresentationControls
          global
          /* rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }} */
        >
          <Float rotationIntensity={0}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={"#ff6900"}
              /* rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]} */
            />

            <primitive
              ref={computerRef}
              object={computer.scene}
              position-x={computerState.position.x}
              position-y={computerState.position.y}
              position-z={computerState.position.z}
              rotation-x={computerState.rotation.x}
              rotation-y={computerState.rotation.y}
              rotation-z={computerState.rotation.z}
              /* position-y={-1.2}
              rotation-x={0.13} */
              /* position={[0, -1.2, 1]}
              rotation={[0, -0.6, -0.01]} */
            >
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
                occlude="blending"
              >
                <iframe
                  style={{
                    width: 1024,
                    height: 670,
                    border: "none",
                    borderRadius: 20,
                    background: "#000000",
                  }}
                  src="https://bruno-simon.com/html/"
                />
              </Html>
            </primitive>

            <Text
              fontSize={1}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
              maxWidth={2}
            >
              BRUNO SIMON
            </Text>
          </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Canvas>
      <button
        onClick={() => {
          /* setComputerState((state) => (state === 0 ? 1 : 0));

          gsap.to(computerRef.current.position, {
            x: computerState.position.x,
            y: computerState.position.y,
            z: computerState.position.z,
            duration: 1,
            ease: "power4.inOut",
          });
          gsap.to(computerRef.current.rotation, {
            x: computerState.rotation.x,
            y: computerState.rotation.y,
            z: computerState.rotation.z,
            duration: 1,
            ease: "power4.inOut",
          }); */
        }}
      >
        Active
      </button>
    </div>
  );
};

export default ThreePage;
