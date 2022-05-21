import React from "react";
import {
  ContainerNoventa,
  Montserrat500white14,
  Montserrat600white138,
  Montserrat900white249,
  StrokedText,
  ImagenSpots,
} from "../General.elements";
import {
  Animacion2dContainer,
  ContainertitleStroked,
  DiferenteParagraph,
  GridAnimation2d,
} from "./Animacion2d.elements";
import Manray_Animacion2D_Apachesjpg from "../../img/May/Manray_Animacion2D_Apaches.jpg";
import Manray_Animacion2D_Apachesgif from "../../img/May/Manray_Animacion2D_Apaches.gif";
import Manray_Animacion2D_Mestenopng from "../../img/May/Manray_Animacion2D_Mesteno.png";
import Manray_Animacion2D_Mestenogif from "../../img/May/Manray_Animacion2D_Mesteno.gif";

const Animacion2d = () => {
  return (
    <>
      <ContainerNoventa>
        <Animacion2dContainer>
          <Montserrat600white138>Animación</Montserrat600white138>
          <ContainertitleStroked>
            <Montserrat900white249>
              <StrokedText>2D</StrokedText>
            </Montserrat900white249>
          </ContainertitleStroked>
        </Animacion2dContainer>
        <GridAnimation2d>
          <div>
            <ImagenSpots
              urlJpg={Manray_Animacion2D_Mestenopng}
              urlGif={Manray_Animacion2D_Mestenogif}
              minHeightSpecific={"329px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
            <DiferenteParagraph>
              <Montserrat500white14 style={{ lineHeight: "20.36px" }}>
                Reflejamos en video lo que quieres transmitir con tu letra,
                generamos producciones audiovisuales que expresen la energía de
                tu música.
              </Montserrat500white14>
            </DiferenteParagraph>
          </div>
          <div>
            <ImagenSpots
              urlJpg={Manray_Animacion2D_Apachesjpg}
              urlGif={Manray_Animacion2D_Apachesgif}
              minHeightSpecific={"417px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
          </div>
        </GridAnimation2d>
      </ContainerNoventa>
    </>
  );
};

export default Animacion2d;
