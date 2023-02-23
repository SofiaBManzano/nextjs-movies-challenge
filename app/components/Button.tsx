import styled from "styled-components";
import { fontSecondary } from "./config/theme";
import { colors } from "./config/theme";
import { ButtonProps } from "./types";

export const button = styled.button<ButtonProps>`
  background: ${(props: ButtonProps) =>
    props.primary || props.isActive
      ? `${colors.primaryBtn}`
      : `${colors.secondaryBtn}`};

  cursor: pointer;
  color: ${(props: ButtonProps) =>
    props.primary || props.isActive
      ? `${colors.lightColor}`
      : `${colors.darkColor}`};
  ${fontSecondary.style};
  font-size: 16px;
  line-height: 28px;

  padding: 8px 51px;
  border: none;
  border-radius: 16px;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ isActive }) =>
    isActive &&
    `
   
    outline: 1px solid ${colors.primaryBtn};
    outline-offset: 2px;
`}
`;

export default button;
