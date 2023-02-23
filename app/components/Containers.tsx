import styled from "styled-components";

const ContentainerButtonFilter = styled.div`
margin-bottom: 40px;
display: flex;
gap: 16px;
overflow: scroll;
padding-left: 32px;
padding-right:32px;
&::-webkit-scrollbar {
  display: none;
}
@media (min-width: 768px) {
  overflow: initial;

}
}
    `;

const ContainerImg = styled.div`
  position: relative;
  width: 261px;
  height: 386px;
  border-radius: 8px;

  overflow: hidden;
  overflow-x: auto;
  min-width: 261px;
`;

export default { ContentainerButtonFilter, ContainerImg };
