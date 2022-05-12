import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import { CuerpoContenido } from "./Components/General.elements";
import SiguienteNivel from "./Components/SiguienteNivel/SiguienteNivel";

function App() {
  return (
    <>
      <NavBar />
      <CuerpoContenido>
        <Header />
        <SiguienteNivel />
      </CuerpoContenido>
    </>
  );
}

export default App;
