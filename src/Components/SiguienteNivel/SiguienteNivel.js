import React from "react";
import {
  Montserrat500white14,
  Montserrat600white22,
  Montserrat800white48,
} from "../General.elements";
import {
  BotomTextsNextLevel,
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
            <Montserrat800white48
              style={{ marginLeft: "33px", marginBottom: ".5em" }}
            >
              Entendemos tu idea y la llevamos al siguiente
              <TextSpanStrock>NIVEL</TextSpanStrock>
            </Montserrat800white48>
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
              <div>
                <Montserrat500white14
                  style={{
                    lineHeight: "19px",
                    fontSize: "13px",
                    marginLeft: "10px",
                    maxWidth: "66%",
                  }}
                >
                  Nos especializamos en la producción de comerciales, videos
                  corporativos, cortometrajes, live streaming. Expertos en
                  marketing político.
                </Montserrat500white14>
              </div>
            </BotomTextsNextLevel>
          </WeUnderstand>
          <ManrayLogotype>
            <img src={ManrayLogo} alt="Manray" />
          </ManrayLogotype>
        </SiguienteNivelContenido>
      </SiguienteNivelContainer>
    </>
  );
};

export default SiguienteNivel;
