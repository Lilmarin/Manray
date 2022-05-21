import React from "react";
import {
  ImagenSpots,
  Montserrat400white16,
  Montserrat500white14,
  Montserrat800white138,
} from "../General.elements";
import {
  PodcastContainer,
  PodcastContent,
  PodcastTitle,
  SubtitlePodcast,
  TextLastPodcast,
  TitlePodcastUp,
} from "./Podcast.elements";
import Manray_PodcastYTV_SazonDeChihuahuajpg from "../../img/May/Manray_PodcastYTV_SazonDeChihuahua.jpg";
import Manray_PodcastYTV_SazonDeChihuahuagif from "../../img/May/Manray_PodcastYTV_SazonDeChihuahua.gif";
import Manray_PodcastYTV_CoparmexLagunajpg from "../../img/May/Manray_PodcastYTV_CoparmexLaguna.jpg";
import Manray_PodcastYTV_CoparmexLagunagif from "../../img/May/Manray_PodcastYTV_CoparmexLaguna.gif";
import Manray_PodcastYTV_CoctelDonJacintojpg from "../../img/May/Manray_PodcastYTV_CoctelDonJacinto.jpg";
import Manray_PodcastYTV_CoctelDonJacintogif from "../../img/May/Manray_PodcastYTV_CoctelDonJacinto.gif";
import Manray_PodcastYTV_NosotrasSinFiltrojpg from "../../img/May/Manray_PodcastYTV_NosotrasSinFiltro.jpg";
import Manray_PodcastYTV_NosotrasSinFiltrogif from "../../img/May/Manray_PodcastYTV_NosotrasSinFiltro.gif";
import Manray_PodcastYTV_DemoVasoRojojpg from "../../img/May/Manray_PodcastYTV_DemoVasoRojo.jpg";
import Manray_PodcastYTV_DemoVasoRojogif from "../../img/May/Manray_PodcastYTV_DemoVasoRojo.gif";

const Podcast = () => {
  return (
    <>
      <PodcastContainer>
        <PodcastTitle>
          <TitlePodcastUp>
            <Montserrat800white138 style={{ textTransform: "capitalize" }}>
              Podcasts
            </Montserrat800white138>
          </TitlePodcastUp>
          <SubtitlePodcast>
            <Montserrat400white16>
              Spots de radio & TV <br />
              _________
            </Montserrat400white16>
          </SubtitlePodcast>
        </PodcastTitle>
        <PodcastContent>
          <div>
            <ImagenSpots
              urlJpg={Manray_PodcastYTV_SazonDeChihuahuajpg}
              urlGif={Manray_PodcastYTV_SazonDeChihuahuagif}
              minHeightSpecific={"248px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
            <ImagenSpots
              urlJpg={Manray_PodcastYTV_CoctelDonJacintojpg}
              urlGif={Manray_PodcastYTV_CoctelDonJacintogif}
              minHeightSpecific={"329px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
            <ImagenSpots
              urlJpg={Manray_PodcastYTV_NosotrasSinFiltrojpg}
              urlGif={Manray_PodcastYTV_NosotrasSinFiltrogif}
              minHeightSpecific={"248px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
          </div>

          <div>
            <ImagenSpots
              urlJpg={Manray_PodcastYTV_CoparmexLagunajpg}
              urlGif={Manray_PodcastYTV_CoparmexLagunagif}
              minHeightSpecific={"417px"}
              widthSpecific={"100%"}
              style={{ margin: "0 0 29px auto" }}
            />
            <ImagenSpots
              urlJpg={Manray_PodcastYTV_DemoVasoRojojpg}
              urlGif={Manray_PodcastYTV_DemoVasoRojogif}
              minHeightSpecific={"248px"}
              widthSpecific={"79%"}
            />
            <TextLastPodcast>
              <Montserrat500white14 style={{ lineHeight: "20.36px" }}>
                Todos hacen podcast pero pocos lo hacen bien
              </Montserrat500white14>
              <br />
              <br />
              <Montserrat500white14>
                dejanos ayudarte.
                <br />
                _________
              </Montserrat500white14>
            </TextLastPodcast>
          </div>
        </PodcastContent>
      </PodcastContainer>
    </>
  );
};

export default Podcast;
