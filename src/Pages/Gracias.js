import React from "react";
import {
  Montserrat600white22two,
  Montserrat900white8866,
} from "../Components/General.elements";
import {
  ButtonWhiteThanks,
  GraciasBtnContainer,
  GraciasContainer,
  GraciasIMGGift,
  GraciasSubtitle,
  GraciasTitle,
  IMGCamera,
  LeftContainerThanks,
  Linecontainer,
  StrokedTextYellow,
} from "../Components/Gracias/Gracias.elements";
import ManrayLogo from "../img/May/ManrayLogoGiratorio.gif";
import Gracias_Image from "../img/May/Gracias_Image.png";

const Gracias = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  return (
    <GraciasContainer>
      <LeftContainerThanks>
        <IMGCamera src={Gracias_Image} alt="Manray" />
        <Linecontainer>
          <GraciasIMGGift src={ManrayLogo} alt="Manray" />
        </Linecontainer>
        <GraciasTitle>
          <Montserrat900white8866>
            ¡Gracias
            <StrokedTextYellow style={{ borderColor: "#FF9C41" }}>
              {" "}
              {name}!
            </StrokedTextYellow>
          </Montserrat900white8866>
        </GraciasTitle>
        <GraciasSubtitle>
          <Montserrat600white22two>
            Pronto nos pondremos en contacto contigo
          </Montserrat600white22two>
          <GraciasBtnContainer>
            <a href="/">
              {" "}
              <ButtonWhiteThanks>Regresar </ButtonWhiteThanks>
            </a>
          </GraciasBtnContainer>
        </GraciasSubtitle>
      </LeftContainerThanks>
    </GraciasContainer>
  );
};

export default Gracias;
