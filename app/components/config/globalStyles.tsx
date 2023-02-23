"use client";
import { createGlobalStyle } from "styled-components";

import { colors } from "./theme";
import { fontPrimary } from "./theme";

const GlobalStyles = createGlobalStyle`

html,
body {
    padding: 0;
    margin: 0;
    ${fontPrimary.style};
    background-color:  ${colors.lightDark};
    max-width: 100vw;
    overflow-x: hidden;
}
::selection {
    background-color: ${colors.lightDark};
    color: ${colors.corporativeColor};
  }
a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
}
ul {
    list-style-type: none;
}

p {
    color: ${colors.lightColor};
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    margin: 0 0 10px;


}

`;

export default GlobalStyles;
