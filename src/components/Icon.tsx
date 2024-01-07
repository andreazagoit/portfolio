import styled from "styled-components";

// @ts-ignore
import { ReactComponent as LinkedInIcon } from "../public/icons/linkedin.svg";
// @ts-ignore
import { ReactComponent as MailIcon } from "../public/icons/mail.svg";
// @ts-ignore
import { ReactComponent as CopyIcon } from "../public/icons/copy.svg";

const icons = {
  linkedIn: <LinkedInIcon />,
  mail: <MailIcon />,
  copy: <CopyIcon />,
};

interface IProps {
  icon: keyof typeof icons;
  href?: string;
}

const Icon = ({ icon, href }: IProps) => {
  return (
    <IconContainer>
      <a href={href ? href : "#"} target="_blank">
        {icons[icon]}
      </a>
    </IconContainer>
  );
};

export default Icon;

const IconContainer = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    svg {
      transition: all 0.3s;
      height: 54px;
      width: 54px;
    }
  }
`;
