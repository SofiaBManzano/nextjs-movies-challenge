import styled from 'styled-components'
import {colors} from './config/theme'
 export const button =  styled.button`
        background: 
        ${colors.primaryBtn};
        cursor: pointer;
        color: ${colors.lightColor};

        font-size: 16px;
        line-height: 28px;

        padding: 8px 51px;
        border: none;
        border-radius: 16px;
        transition: 0.3s;

        &:hover{
            filter: brightness(1.2);
        }
    `;

export default button