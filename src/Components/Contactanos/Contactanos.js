import React from "react";
import {
  ContainerNoventa,
  Montserrat600white145,
  Montserrat600white16,
  Montserrat600white60,
} from "../General.elements";
import {
  ContactanosContainer,
  Containernoventaysiete,
  Containernoventaytres,
  ContainerTextModal,
  FormularioContainer,
} from "./Contactanos.elements";

const Contactanos = () => {
  return (
    <>
      <ContactanosContainer>
        <ContainerNoventa style={{ borderBottom: "2px solid #ffffff" }}>
          <Containernoventaytres>
            <div
              style={{ borderBottom: "2px solid #ffffff", marginBottom: "5em" }}
            >
              <Montserrat600white145>Contáctanos</Montserrat600white145>
            </div>
            <Containernoventaysiete>
              <ContainerTextModal>
                <Montserrat600white60 style={{ textTransform: "uppercase" }}>
                  Dejanos ayudarte a plasmar tu idea en audiovisual
                </Montserrat600white60>
                <Montserrat600white16 style={{ marginTop: ".5em" }}>
                  ¿ESTAS LISTO?
                </Montserrat600white16>
                <FormularioContainer>
                  <h1>FORMULARIO</h1>
                </FormularioContainer>
              </ContainerTextModal>
            </Containernoventaysiete>
          </Containernoventaytres>
        </ContainerNoventa>
      </ContactanosContainer>
    </>
  );
};

export default Contactanos;
