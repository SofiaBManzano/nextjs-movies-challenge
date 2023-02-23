import styled from "styled-components";

const DetailLayoutInfo = styled.section`
  max-width: 1400px;
  margin: auto;
  width: 80%;
  padding-bottom: 150px;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;

  align-items: flex-end;
  aspect-ratio: 9/16;
  margin-bottom: 151px;
  justify-content: start;

  width: 100%;

  @media (min-width: 1440px) {
    max-height: 57vh;
    padding: 32px;
    justify-content: end;
    aspect-ratio: 16/9;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    max-height: 57vh;
  }
`;
const BtnsContainer = styled.div`
  position: relative;
  margin-bottom: -120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  left: 0;
  position: relative;
  padding: 0 16px;
  @media (min-width: 768px) {
    position: absolute;
    margin-bottom: 0;
    flex-direction: row;
    padding-bottom: 20px;
  }
`;
const DetailInfo = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export default { ImageContainer, BtnsContainer, DetailInfo, DetailLayoutInfo };
