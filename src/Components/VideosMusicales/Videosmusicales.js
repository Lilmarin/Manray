import React from "react";
import {
  ContainerNoventa,
  ImagenSpots,
  Montserrat800white13833,
  StrokedText,
  RedHatDisplay71,
} from "../General.elements";
import {
  ContainerGridIndividual,
  GridVideosMusicales,
  MusicalesContent,
} from "./Videosmusicales.elements";
import Manray_VideosMuscales_Cahpojpg from "../../img/May/Manray_VideosMuscales_Cahpo.jpg";
import Manray_VideosMuscales_Cahpogif from "../../img/May/Manray_VideosMuscales_Cahpo.gif";
import ManrayvideosmusicalesMobile from "../../img/June/Manray_VideosMuscales_Cahpo.png";

const Videosmusicales = ({ videosmusicalesRef }) => {
  return (
    <>
      <ContainerNoventa ref={videosmusicalesRef}>
        <GridVideosMusicales>
          <ContainerGridIndividual>
            <Montserrat800white13833>VIDEOS</Montserrat800white13833>
            <MusicalesContent>
              <RedHatDisplay71>
                <StrokedText>MUSICALES</StrokedText>
              </RedHatDisplay71>
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
              imgmobile={ManrayvideosmusicalesMobile}
            />
          </ContainerGridIndividual>
        </GridVideosMusicales>
      </ContainerNoventa>
    </>
  );
};

export default Videosmusicales;
