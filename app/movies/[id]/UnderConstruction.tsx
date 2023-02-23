import Link from "next/link";
import Popup from "./popUpContainer";

const { PopUpContainer, PopUpLayout, PopUptext, PopUpTitle, PopUpIcon } = Popup;
export default function UnderConstruction() {
  return (
    <PopUpLayout>
      <PopUpContainer>
        <PopUpTitle>Estamos en construcción 😞</PopUpTitle>
        <PopUptext>
          Pronto podrás ver la información de tu película al detalle
        </PopUptext>
        <Link href="/" as="/">
          <PopUpIcon>⟵</PopUpIcon>
        </Link>
      </PopUpContainer>
    </PopUpLayout>
  );
}
