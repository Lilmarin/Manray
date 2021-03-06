import React from "react";
import {
  ContainerNoventa,
  ImagenSpots,
  Montserrat800white13833,
  Montserrat900white7133,
  StrokedText,
} from "../General.elements";
import {
  ContainerGridIndividual,
  GridVideosMusicales,
  MusicalesContent,
} from "./Videosmusicales.elements";
import Manray_VideosMuscales_Cahpojpg from "../../img/May/Manray_VideosMuscales_Cahpo.jpg";
import Manray_VideosMuscales_Cahpogif from "../../img/May/Manray_VideosMuscales_Cahpo.gif";

const Videosmusicales = ({ videosmusicalesRef }) => {
  return (
    <>
      <ContainerNoventa ref={videosmusicalesRef}>
        <GridVideosMusicales>
          <ContainerGridIndividual>
            <Montserrat800white13833>VIDEOS</Montserrat800white13833>
            <MusicalesContent>
              <Montserrat900white7133>
                <StrokedText>MUSICALES</StrokedText>
              </Montserrat900white7133>
            </MusicalesContent>
          </ContainerGridIndividual>
          <ContainerGridIndividual>
            <ImagenSpots
              urlJpg={Manray_VideosMuscales_Cahpojpg}
              urlGif={Manray_VideosMuscales_Cahpogif}
              minHeightSpecific={"329px"}
              widthSpecific={"100%"}
              marginImagenSpots={"0 0 29px auto"}
              marginImagenSpotsMobile={"0 0 10px auto"}
              minHeightSpecificMobile={"135px"}
            />
          </ContainerGridIndividual>
        </GridVideosMusicales>
      </ContainerNoventa>
    </>
  );
};

export default Videosmusicales;
