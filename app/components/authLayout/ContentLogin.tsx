import styled from "styled-components";
import { colors } from "../config/theme";
export const contentLogin = styled.div`
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
  @media (min-width: 768px) {
    width: 352px;
  }

  ${({ loginFail }) =>
    loginFail &&
    `
    animation-name: loginFail;
    animation-duration: .1s;
    animation-iteration-count: 2;
    animation-timing-function: linear;
    @keyframes loginFail {
     0% {
         transform: rotate(0deg);
     }
   
     25% {
         transform: rotate(-3deg);
     }
     50% {
         transform: rotate(5deg);
     }
     75% {
        transform: rotate(3deg);
    }
     100% {
         transform: rotate(0deg);
     }
 }
`}
`;

export default contentLogin;
