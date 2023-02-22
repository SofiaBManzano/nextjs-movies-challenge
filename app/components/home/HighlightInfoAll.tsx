import styled from 'styled-components'

const HighlightContentInfo =  styled.div`

 position: absolute;
 top:0;
 bottom:0;
 right: 0;
 left: 0;
 z-index: 5;
}
    `;

const HighlightInfo =  styled.div`
    border: red 1px solid;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 768px) {
        padding-left: 32px;
       
    }
}
    `;
    const HighlightedTitle =  styled.h2`
   color: white;
   text-transform: uppercase;
   font-size: 54px;
   margin-bottom: 16px;
    @media (min-width: 768px) {
      max-width: 324px;
    
       
    }
}
    `;
    const HighlightedText =  styled.p`
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media (min-width: 768px) {
        max-width: 200px;
       
    }
}
    `;

export default {HighlightContentInfo, HighlightInfo, HighlightedText, HighlightedTitle}
