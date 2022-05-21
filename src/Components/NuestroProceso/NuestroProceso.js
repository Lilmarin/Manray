import React from "react";
import {
  ContainerNoventa,
  Montserrat500white14,
  Montserrat600white138,
} from "../General.elements";
import {
  ImagenProcess,
  TextBottomProcess,
  TitleWithBorder,
  TitlewithoutBorder,
} from "./NuestroProceso.elements";
import Proceso from "../../img/May/Proceso.png";
import ProcesoMobile from "../../img/May/ProcesoMobile.png";

const NuestroProceso = () => {
  var ancho = window.screen.width;
  return (
    <>
      <ContainerNoventa>
        <ContainerNoventa style={{ margin: "0 auto 0 0" }}>
          <TitleWithBorder>
            <Montserrat600white138>Nuestro</Montserrat600white138>
          </TitleWithBorder>
          <TitlewithoutBorder>
            <Montserrat600white138>Proceso</Montserrat600white138>
          </TitlewithoutBorder>

          {ancho > "1020" ? (
            <ImagenProcess urlimage={Proceso} alt="Nuestro Proceso" />
          ) : (
            <ImagenProcess urlimage={ProcesoMobile} alt="Nuestro Proceso" />
          )}
          <TextBottomProcess>
            <Montserrat500white14>
              Déjanos sumarnos a tu equipo de comunicación en breve nos
              pondremos en contacto para que nos cuentes de tu proyecto
            </Montserrat500white14>
          </TextBottomProcess>
        </ContainerNoventa>
      </ContainerNoventa>
    </>
  );
};

export default NuestroProceso;
