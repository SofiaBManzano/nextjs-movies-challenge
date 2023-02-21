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
    padding: 20px;
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

export default {HighlightContentInfo, HighlightInfo}
