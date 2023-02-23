import styled from "styled-components";
import { colors } from "../config/theme";

import { fontPrimary } from "../config/theme";

export const Input = styled.input`
${fontPrimary.style};
  background: rgba(255, 255, 255, 0.1);
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  padding: 13px 16px;
  border: 1px solid ${colors.primaryBtn};
  border-radius: 8px;
  color: white;

  &::placeholder {
    color: var(--light-text);
    font-size: 16px;
  }
`;

export default Input;
