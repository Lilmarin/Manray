import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import { Alltheboxes, CuerpoContenido } from "./Components/General.elements";
import SiguienteNivel from "./Components/SiguienteNivel/SiguienteNivel";
import SelectedWork from "./Components/SelectedWork/SelectedWork";
import WeAreExperts from "./Components/WeAreExperts/WeAreExperts";
import SpotsComerciales from "./Components/SpotsComerciales/SpotsComerciales";
import NuestrosClientes from "./Components/NuestrosClientes/NuestrosClientes";
import VideosCorporativos from "./Components/VideosCorporativos/VideosCorporativos";
import Animacion2d from "./Components/Animacion2d/Animacion2d";
import Videosmusicales from "./Components/VideosMusicales/Videosmusicales";
import Podcast from "./Components/Podcast/Podcast";
import NuestroProceso from "./Components/NuestroProceso/NuestroProceso";
import Contactanos from "./Components/Contactanos/Contactanos";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CuerpoContenido>
        <Header />
        <SiguienteNivel />
        <Alltheboxes>
          <SelectedWork />
          <WeAreExperts />
          <SpotsComerciales />
          <NuestrosClientes />
          <VideosCorporativos />
          <Animacion2d />
          <Videosmusicales />
          <Podcast />
          <NuestroProceso />
          <Contactanos />
        </Alltheboxes>
      </CuerpoContenido>
      <Footer />
    </>
  );
}

export default App;
