import React from "react";
import Formulario from "../Formulario/Formulario";
import {
  ContainerNoventa,
  Montserrat600white14522,
  Montserrat600white16,
  Montserrat600white6055,
} from "../General.elements";
import {
  ContactanosContainer,
  Contactanostitle1,
  Containernoventaysiete,
  Containernoventaytres,
  ContainerTextModal,
  FormularioContainer,
} from "./Contactanos.elements";

const Contactanos = ({ contactanosRef }) => {
  return (
    <>
      <ContactanosContainer ref={contactanosRef}>
        <ContainerNoventa style={{ borderBottom: "1.5px solid #ffffff" }}>
          <Containernoventaytres>
            <Contactanostitle1>
              <Montserrat600white14522>Contáctanos</Montserrat600white14522>
            </Contactanostitle1>
            <Containernoventaysiete>
              <ContainerTextModal>
                <Montserrat600white6055 style={{ textTransform: "uppercase" }}>
                  Dejanos ayudarte a plasmar tu idea en audiovisual
                </Montserrat600white6055>
                <Montserrat600white16 style={{ marginTop: ".5em" }}>
                  ¿ESTAS LISTO?
                </Montserrat600white16>
                <FormularioContainer>
                  <Formulario />
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
