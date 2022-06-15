import React from "react";
import {
  Montserrat500white14,
  Montserrat500white1422,
  Montserrat600white22,
  Montserrat800white4822,
} from "../General.elements";
import {
  BotomTextsNextLevel,
  Flecha,
  ManrayLogotype,
  SiguienteNivelContainer,
  SiguienteNivelContenido,
  TextSpanStrock,
  WeUnderstand,
} from "./SiguienteNivel.elements";
import ManrayLogo from "../../img/May/ManrayLogoGiratorio.gif";

const SiguienteNivel = () => {
  return (
    <>
      <SiguienteNivelContainer>
        <SiguienteNivelContenido>
          <WeUnderstand>
            <Montserrat800white4822>
              Entendemos tu idea y la llevamos al siguiente
              <TextSpanStrock className="CustomText">NIVEL</TextSpanStrock>
            </Montserrat800white4822>

            <hr style={{ marginTop: "10px" }} />
            <BotomTextsNextLevel>
              <div>
                <Montserrat600white22>
                  Somos una casa <br />
                  productora de <br />
                  video, audio, <br />
                  animación y <br />
                  contenido <br />
                  para redes <br /> sociales
                </Montserrat600white22>
                <Montserrat500white14
                  style={{ marginTop: "30px", marginBottom: "1em" }}
                >
                  Conoce nuestro trabajo
                </Montserrat500white14>
              </div>
              <div style={{ position: "relative" }}>
                <Montserrat500white1422>
                  Nos especializamos en la producción de comerciales, videos
                  corporativos, cortometrajes, live streaming. Expertos en
                  marketing político.
                </Montserrat500white1422>
                <Flecha />
              </div>
            </BotomTextsNextLevel>
          </WeUnderstand>
          <ManrayLogotype>
            <img className="Next-Level-Gift" src={ManrayLogo} alt="Manray" />
          </ManrayLogotype>
        </SiguienteNivelContenido>
      </SiguienteNivelContainer>
    </>
  );
};

export default SiguienteNivel;
