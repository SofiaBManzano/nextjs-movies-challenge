import styled from "styled-components";
import { colors } from "../../components/config/theme";

const PopUpLayout = styled.div`
  color: ${colors.lightColor};
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PopUpContainer = styled.div`
  background-color: ${colors.lightColor};
  border-radius: 10px;
  opacity: 1;
  color: ${colors.darkColor};
  padding: 16px;
  position: absolute;
  padding: 50px;

  width: 80%;
  max-width: 352px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PopUptext = styled.p`
        color: ${colors.darkColor};
       }
    `;
const PopUpTitle = styled.h3`
    color: ${colors.darkColor};
    font-size: 2em;
    margin: 0 0 10px;
   }
`;
const PopUpIcon = styled.span`
    color: ${colors.corporativeColor};

    font-size: 2em;

    }
`;

export default {
  PopUpContainer,
  PopUpLayout,
  PopUptext,
  PopUpTitle,
  PopUpIcon,
};
