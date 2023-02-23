import styled from "styled-components";
import { flexContainer } from "../types";
import { colors } from "../config/theme";
import { fontSecondary } from "../config/theme";
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
   ${fontSecondary.style};
   font-weight: 700;
   font-size: 54px;
   margin-bottom: 16px;
   margin-top: 0;

   
   margin-bottom: 10px;
    @media (min-width: 768px) {

      font-size: 76px;
    }

    @media (min-width: 1440px) {
        font-size: 128px;
       
    }
    @media (min-width: 1660px) {
        font-size: 128px;
    }
}
    `;
const HighlightedText = styled.p`
    display: -webkit-box;
 
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    @media (min-width: 768px) {
        
       
    }
    @media (min-width: 1440px) {
    
        font-size: 24px;
       
    }
    @media (min-width: 1660px) {
      
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
    max-width: calc(100% - 173px);
  }
  @media (min-width: 1440px) {
    max-width: calc(100% - 757px);
  }
  @media (min-width: 1660px) {
    max-width: calc(100% - 967px);
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
