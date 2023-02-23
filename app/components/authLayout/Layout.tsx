
import styled from 'styled-components'


 export const Layout =  styled.section`
        height: 100vh;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 768px) {
            justify-content: flex-end;
            padding: 32px;
        }
        @media (min-width: 1440px) {
            width: 90%;
            max-width: 1700px;
        }
    `;

export default Layout