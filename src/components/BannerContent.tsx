import React from "react";
import styled from "styled-components";
import { useAnimationContext } from "../context/Animation";
import Button from "./Button";
import MailButton from "./MailButton";
import Stack from "./Stack";

const BannerContent = () => {
  const { computerRef, computerState, animateComputer, bannerContentRef } =
    useAnimationContext();

  return (
    <BannerContentContainer ref={bannerContentRef}>
      <h1 style={{ color: "red", fontSize: 64 }}>Creative Developer</h1>
      <p>
        Mi chiamo Andrea e sono un Full-Stack Developer con un focus sul Visual
        Design. Ho una propensione all'analisi critica per determinare degli
        standard e all'ottimizzazione per ottenere dei vantaggi reali. Curiosità
        per ogni ambito e aspetto dell'innovazione e del design, credo che la
        vita sia un percorso per un continuo migliorarsi.
      </p>
      <Stack style={{ flexDirection: "row", gap: 20 }}>
        <Button onClick={() => animateComputer(1)}>Esplora</Button>
        <MailButton />
      </Stack>
    </BannerContentContainer>
  );
};

export default BannerContent;

const BannerContentContainer = styled.div`
  width: calc(40% - 80px);
  position: absolute;
  z-index: 20;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;
