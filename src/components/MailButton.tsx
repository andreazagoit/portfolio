import styled from "styled-components";

// @ts-ignore
import { ReactComponent as CopyIcon } from "../public/icons/copy.svg";

const MailButton = () => {
  return (
    <MailButtonContainer
      onClick={() => {
        navigator.clipboard.writeText("info@andreazago.it");
        alert("Copiato nella clipboard!");
      }}
    >
      info@andreazago.it
      <CopyIcon />
    </MailButtonContainer>
  );
};

export default MailButton;

const MailButtonContainer = styled.div`
  border-radius: 30px;
  height: 48px;
  cursor: pointer;
  border: 2px solid red;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;

  &:hover {
    background: #eee;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
