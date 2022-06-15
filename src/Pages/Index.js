import React from "react";
import Header from "../Components/Header/Header";
import SiguienteNivel from "../Components/SiguienteNivel/SiguienteNivel";
import SelectedWork from "../Components/SelectedWork/SelectedWork";
import WeAreExperts from "../Components/WeAreExperts/WeAreExperts";
import SpotsComerciales from "../Components/SpotsComerciales/SpotsComerciales";
import NuestrosClientes from "../Components/NuestrosClientes/NuestrosClientes";
import VideosCorporativos from "../Components/VideosCorporativos/VideosCorporativos";
import Animacion2d from "../Components/Animacion2d/Animacion2d";
import Videosmusicales from "../Components/VideosMusicales/Videosmusicales";
import Podcast from "../Components/Podcast/Podcast";
import NuestroProceso from "../Components/NuestroProceso/NuestroProceso";
import Contactanos from "../Components/Contactanos/Contactanos";
import { Alltheboxes } from "../Components/General.elements";

const Index = (props) => {
  return (
    <>
      <Header
        contactanosRef={props.contactanosRef}
        executeScroll={props.executeScroll}
      />
      <SiguienteNivel />
      <Alltheboxes>
        <SelectedWork selectedworkRef={props.selectedworkRef} />
        <WeAreExperts />
        <SpotsComerciales spotscomercialesRef={props.spotscomercialesRef} />
        <NuestrosClientes />
        <VideosCorporativos
          videoscorporativosRef={props.videoscorporativosRef}
        />
        <Animacion2d animacionRef={props.animacionRef} />
        <Videosmusicales videosmusicalesRef={props.videosmusicalesRef} />
        <Podcast podcastRef={props.podcastRef} />
        <NuestroProceso nuestroprocesoRef={props.nuestroprocesoRef} />
        <Contactanos contactanosRef={props.contactanosRef} />
      </Alltheboxes>
    </>
  );
};

export default Index;
