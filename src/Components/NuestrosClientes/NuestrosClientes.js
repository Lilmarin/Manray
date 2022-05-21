import React from "react";
import {
  Montserrat500white14,
  Montserrat900white96,
  StrokedText,
} from "../General.elements";
import {
  GridImageClients,
  NuestrosClientesContainer,
  ParagraphContentClients,
  TitleContentClients,
  ImagenClientesOurs,
} from "./NuestrosClientes.elements";
import Nuestrosclientes from "../../img/May/NuestrosClientes.png";

const NuestrosClientes = () => {
  return (
    <>
      <NuestrosClientesContainer>
        <TitleContentClients>
          <Montserrat900white96>
            <StrokedText>NUESTROS CLIENTES</StrokedText>
          </Montserrat900white96>
          <ParagraphContentClients>
            <Montserrat500white14
              style={{
                lineHeight: "146%",
                fontSize: "15px",
              }}
            >
              Llevamos mas de 8 años generando una conexión entre tu proyectos y
              tu audiencias, nuestros clientes nos respaldan.
            </Montserrat500white14>
          </ParagraphContentClients>
        </TitleContentClients>
        <GridImageClients>
          <ImagenClientesOurs
            imgSpecificWidth="1027px"
            backgroundContent={Nuestrosclientes}
            imgMinHeight="80px"
          />
        </GridImageClients>
      </NuestrosClientesContainer>
    </>
  );
};

export default NuestrosClientes;
