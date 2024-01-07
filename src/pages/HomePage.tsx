import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

// GSAP
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useAnimationContext } from "../context/Animation";
import Header from "../components/Header";
import Banner from "../components/Banner";

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin);

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default HomePage;
