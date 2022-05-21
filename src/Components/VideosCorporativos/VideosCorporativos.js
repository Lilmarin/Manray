import React from "react";
import {
  ContainerNoventa,
  ImagenSpots,
  Montserrat500white14,
  Montserrat800white114,
  Montserrat900white110,
  StrokedText,
} from "../General.elements";
import {
  GridVideosCorporativos,
  ParagraphVideosText,
  VideoCorpTextLeft,
  VideosCorporativosTitle,
} from "./VideosCorporativos.elements";
import Manray_VideosCorporativos_Tecatepng from "../../img/May/Manray_VideosCorporativos_Tecate.png";
import Manray_VideosCorporativos_Tecategif from "../../img/May/Manray_VideosCorporativos_Tecate.gif";
import Manray_VideosCorporativos_GrupoDentaljpg from "../../img/May/Manray_VideosCorporativos_GrupoDental.jpg";
import Manray_VideosCorporativos_GrupoDentalgif from "../../img/May/Manray_VideosCorporativos_GrupoDental.gif";
import Manray_VideosCorporativos_JaredCorporativojpg from "../../img/May/Manray_VideosCorporativos_JaredCorporativo.jpg";
import Manray_VideosCorporativos_JaredCorporativogif from "../../img/May/Manray_VideosCorporativos_JaredCorporativo.gif";
import Manray_VideosCorporativos_SanFranciscoCountryClubjpg from "../../img/May/Manray_VideosCorporativos_SanFranciscoCountryClub.jpg";
import Manray_VideosCorporativos_SanFranciscoCountryClubgif from "../../img/May/Manray_VideosCorporativos_SanFranciscoCountryClub.gif";
import Manray_VideosCorporativos_Vivanzajpg from "../../img/May/Manray_VideosCorporativos_Vivanza.jpg";
import Manray_VideosCorporativos_Vivanzagif from "../../img/May/Manray_VideosCorporativos_Vivanza.gif";

const VideosCorporativos = () => {
  return (
    <>
      <ContainerNoventa>
        <VideosCorporativosTitle>
          <Montserrat800white114>VIDEOS</Montserrat800white114>
          <ParagraphVideosText>
            <Montserrat900white110>
              <StrokedText>CORPORATIVOS</StrokedText>
            </Montserrat900white110>
          </ParagraphVideosText>
        </VideosCorporativosTitle>
        <GridVideosCorporativos>
          <div>
            <ImagenSpots
              urlJpg={Manray_VideosCorporativos_Tecatepng}
              urlGif={Manray_VideosCorporativos_Tecategif}
              minHeightSpecific={"417px"}
              widthSpecific={"100%"}
            />
            <ImagenSpots
              urlJpg={Manray_VideosCorporativos_GrupoDentaljpg}
              urlGif={Manray_VideosCorporativos_GrupoDentalgif}
              minHeightSpecific={"247px"}
              widthSpecific={"78%"}
              style={{ margin: "29px 0 0 auto" }}
            />
            <VideoCorpTextLeft>
              <Montserrat500white14>
                Capturamos la Escencia de tu empresa mostrándola de una forma
                creativa e impecable que logre comunicar todo lo que es.
              </Montserrat500white14>
            </VideoCorpTextLeft>
          </div>
          <div>
            <ImagenSpots
              urlJpg={Manray_VideosCorporativos_JaredCorporativojpg}
              urlGif={Manray_VideosCorporativos_JaredCorporativogif}
              minHeightSpecific={"329px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
            <ImagenSpots
              urlJpg={Manray_VideosCorporativos_Vivanzajpg}
              urlGif={Manray_VideosCorporativos_Vivanzagif}
              minHeightSpecific={"247px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
            <ImagenSpots
              urlJpg={Manray_VideosCorporativos_SanFranciscoCountryClubjpg}
              urlGif={Manray_VideosCorporativos_SanFranciscoCountryClubgif}
              minHeightSpecific={"329px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
          </div>
        </GridVideosCorporativos>
      </ContainerNoventa>
    </>
  );
};

export default VideosCorporativos;
