import React from "react";
import styled from "styled-components";
import { useAnimationContext } from "../context/Animation";
import Container from "./Container";
import Icon from "./Icon";

const Header = () => {
  const { headerRef } = useAnimationContext();
  const { headerMenuRef } = useAnimationContext();

  return (
    <HeaderContainer ref={headerRef}>
      <HeaderContent>
        <HeaderBranding>
          <h1>Andrea Zago</h1>
          <h3>2023</h3>
        </HeaderBranding>
        <HeaderMenu>
          <Icon
            icon="linkedIn"
            href="https://www.linkedin.com/in/andreazagoit/"
          />
          <Icon icon="mail" href="mailto:info@andreazago.it" />
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  mix-blend-mode: difference;
  position: absolute;
  width: 100%;
  z-index: 200;
  color: white;
`;

const HeaderContent = styled(Container)`
  padding: 30px;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const HeaderBranding = styled.div``;

const HeaderMenu = styled.div`
  display: flex;

  svg {
    height: 48px;
    width: 48px;
    path {
      fill: white;
    }
  }
`;
