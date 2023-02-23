import styled from "styled-components";
import { flexContainer } from "../types";
const HighlightContentInfo = styled.div`

 position: absolute;
 top:0;
 bottom:0;
 right: 0;
 left: 0;
 z-index: 5;
}
    `;

const HighlightInfo = styled.div`

    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: calc(95px - .83em);
    @media (min-width: 768px) {

        justify-content: flex-start;
        padding-left: 32px;
      
    }
    @media (min-width: 1440px) {
        gap: 14%;
    }
}
    `;
const HighlightedTitle = styled.h2`
   color: white;
   text-transform: uppercase;
   font-size: 54px;
   margin-bottom: 16px;
   max-width: 76%;
    @media (min-width: 768px) {
      max-width: 324px;
    
       
    }
}
    `;
const HighlightedText = styled.p`
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    @media (min-width: 768px) {
        max-width: calc(100% - 173px)
       
    }
}

    `;
const HighlightContainerDiscover = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  height: 50px;
`;
const HighlightContainerInfoBtn = styled.div<flexContainer>`
  width: 100%;
  display: flex;
  justify-content: end;
  height: 50px;
`;
const HighlightContainerInfo = styled.div<flexContainer>`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 0 120px;
  }
`;
export default {
  HighlightContentInfo,
  HighlightInfo,
  HighlightedText,
  HighlightedTitle,
  HighlightContainerInfo,
  HighlightContainerInfoBtn,
  HighlightContainerDiscover,
};
