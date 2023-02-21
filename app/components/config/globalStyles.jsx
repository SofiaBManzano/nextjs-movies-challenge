"use client";
import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";
import {colors} from './theme';

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const GlobalStyles = createGlobalStyle`

html,
body {
    padding: 0;
    margin: 0;
    ${font.style}
    background-color:  ${colors.lightDark};
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
p, h2 {
    color: ${colors.lightColor};
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    margin: 0 0 10px;

    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

}

`;

export default GlobalStyles;
