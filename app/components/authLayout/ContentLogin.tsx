import styled from 'styled-components'
import { colors } from "../config/theme";
 export const contentLogin =  styled.div`
        background-color: ${colors.darkColor};
        padding: 16px;
        position: absolute;
        width: 343px;
        height: 394px;
        gap: 16px;
        border-radius: 16px;
        justify-content: center;
        display: flex;
        flex-direction: column;
       @media (max-width: 768px) {
        width: 352px;

       }
    `;

export default contentLogin