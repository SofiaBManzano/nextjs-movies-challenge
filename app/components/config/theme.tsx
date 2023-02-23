
import { Roboto } from "@next/font/google";
import { Roboto_Condensed } from "@next/font/google";

export const colors = {
    primaryBtn: '#751B5C',

    secondaryBtn: '#FFFFFF',
    lightColor: '#FFFFFF',
    darkColor: '#000000',
    lightDark: '#222222',
    corporativeColor: '#751B5C',
}
export const fontPrimary = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
  });
  export const fontSecondary = Roboto_Condensed({
      subsets: ["latin"],
      weight: ["300", "400","700"],
  });