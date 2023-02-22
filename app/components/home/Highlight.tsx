import styled from "styled-components";

export const Highlight = styled.div`
  position: relative;
  width: 100%;
  height: 386px;

  border: 1px solid blue;
  overflow: hidden;
  overflow-x: auto;
  min-width: 261px;
  aspect-ratio: 375 / 600;

  @media (min-width: 768px) {
    aspect-ratio: 768 / 600;
  }
  @media (min-width: 1440px) {
    aspect-ratio: 1440 / 800;
  }
  @media (min-width: 1660px) {
    aspect-ratio: 1660 / 800;
  }
`;

export default Highlight;
