import gsap from "gsap";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const AnimationContext = createContext(null);

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const computerRef = useRef(null!);
  const headerRef = useRef(null!);
  const headerMenuRef = useRef(null!);
  const backCircleRef = useRef(null!);
  const bannerContentRef = useRef(null!);

  const computerStates = [
    {
      position: { x: 2, y: -1.2, z: -2 },
      rotation: { x: 0.6, y: -0.3, z: 0.2 },
    },
    { position: { x: 0, y: -1.9, z: 2.4 }, rotation: { x: 0.25, y: 0, z: 0 } },
  ];

  let computerState = 0;

  useEffect(() => {
    //Initialize animations
    gsap.set(backCircleRef.current, { scale: 0, autoAlpha: 0 });
  }, []);

  const animateComputer = (computerState: number) => {
    // Enter fullScreen
    if (computerState === 0) {
      const tl = gsap.timeline();
      tl.add("backCircle");
      tl.to(
        backCircleRef.current,
        {
          scale: 0,
          autoAlpha: 0,
          ease: "power4.inOut",
          duration: 0.8,
        },
        "closeBackCircle"
      );
      tl.add("elements", "-=0.5");
      tl.to(
        bannerContentRef.current,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "elements"
      );
      tl.to(
        headerRef.current,
        { yPercent: 0, ease: "power1.inOut" },
        "elements"
      );
      tl.to(
        computerRef.current.position,
        {
          x: computerStates[computerState].position.x,
          y: computerStates[computerState].position.y,
          z: computerStates[computerState].position.z,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "elements"
      );
      tl.to(
        computerRef.current.rotation,
        {
          x: computerStates[computerState].rotation.x,
          y: computerStates[computerState].rotation.y,
          z: computerStates[computerState].rotation.z,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "elements"
      );
    }
    // Exit  fullScreen
    if (computerState === 1) {
      const tl = gsap.timeline();
      tl.add("elements");
      gsap.to(bannerContentRef.current, {
        x: -50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.to(computerRef.current.position, {
        x: computerStates[computerState].position.x,
        y: computerStates[computerState].position.y,
        z: computerStates[computerState].position.z,
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.to(computerRef.current.rotation, {
        x: computerStates[computerState].rotation.x,
        y: computerStates[computerState].rotation.y,
        z: computerStates[computerState].rotation.z,
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.to(headerRef.current, { yPercent: -100 });
      tl.add("backCircle", "-=0.3");
      tl.to(
        backCircleRef.current,
        {
          scale: 1,
          autoAlpha: 1,
          ease: "power4.inOut",
          duration: 0.8,
        },
        "closeBackCircle"
      );
    }
  };

  return (
    <AnimationContext.Provider
      value={{
        computerRef,
        computerState: computerStates[computerState],
        animateComputer,
        headerRef,
        bannerContentRef,
        headerMenuRef,
        backCircleRef,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
