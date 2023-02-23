import styled from "styled-components";
import { fontSecondary } from "../config/theme";
const ListContent = styled.ul`
  overflow-x: scroll;
  display: flex;
  white-space: nowrap;
  gap: 24px;
  padding-left: 16px;
  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1440px) {
    padding-left: 120px;
  }
`;
const ListItem = styled.li`
  display: inline-block;
`;
const ListTitle = styled.h2`
  font-family: ${fontSecondary.style};
  padding-left: 16px;

  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1440px) {
    padding-left: 120px;
  }
`;
export default { ListContent, ListItem, ListTitle };
