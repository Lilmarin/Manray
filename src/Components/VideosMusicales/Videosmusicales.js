import React from "react";
import {
  ContainerNoventa,
  ImagenSpots,
  Montserrat800white138,
  Montserrat900white71,
  StrokedText,
} from "../General.elements";
import {
  ContainerGridIndividual,
  GridVideosMusicales,
  MusicalesContent,
} from "./Videosmusicales.elements";
import Manray_VideosMuscales_Cahpojpg from "../../img/May/Manray_VideosMuscales_Cahpo.jpg";
import Manray_VideosMuscales_Cahpogif from "../../img/May/Manray_VideosMuscales_Cahpo.gif";

const Videosmusicales = () => {
  return (
    <>
      <ContainerNoventa>
        <GridVideosMusicales>
          <ContainerGridIndividual>
            <Montserrat800white138>VIDEOS</Montserrat800white138>
            <MusicalesContent>
              <Montserrat900white71>
                <StrokedText>MUSICALES</StrokedText>
              </Montserrat900white71>
            </MusicalesContent>
          </ContainerGridIndividual>
          <ContainerGridIndividual>
            <ImagenSpots
              urlJpg={Manray_VideosMuscales_Cahpojpg}
              urlGif={Manray_VideosMuscales_Cahpogif}
              minHeightSpecific={"329px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
          </ContainerGridIndividual>
        </GridVideosMusicales>
      </ContainerNoventa>
    </>
  );
};

export default Videosmusicales;
