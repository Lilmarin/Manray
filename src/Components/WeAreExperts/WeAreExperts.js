import React from "react";
import {
  ButtonWhite,
  Montserrat400white16,
  Montserrat700white60,
  EnlaceBtnContainer,
  Montserrat500white14,
} from "../General.elements";
import {
  ExpertGrid,
  ExpertsContainer,
  GridExpertLeft,
  GridExpertRight,
} from "./WeAreExperts.elements";

const WeAreExperts = () => {
  return (
    <>
      <ExpertsContainer>
        <Montserrat700white60>SOMOS EXPERTOS EN BRINDAR</Montserrat700white60>
        <ExpertGrid>
          <GridExpertLeft>
            <Montserrat700white60>SOLUCIONES VISUALES</Montserrat700white60>
            <svg
              width="495"
              height="2"
              viewBox="0 0 495 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.928223 0.717285H494.06" stroke="white" />
            </svg>
            <Montserrat400white16
              style={{ textTransform: "uppercase", fontWeight: "600" }}
            >
              Lo que necesitas, cuéntanos sobre tu proyecto
            </Montserrat400white16>
            <EnlaceBtnContainer>
              <ButtonWhite>Contáctanos</ButtonWhite>
            </EnlaceBtnContainer>
          </GridExpertLeft>
          <GridExpertRight>
            <Montserrat500white14
              style={{
                fontSize: "16px",
                lineHeight: "23.3px",
                maxWidth: "95%",
              }}
            >
              Comunicar lo que necesitas de la forma más creativa posible
              estableciendo los tiempos y las formas que más te funcionen es
              nuestra prioridad.
            </Montserrat500white14>
          </GridExpertRight>
        </ExpertGrid>
      </ExpertsContainer>
    </>
  );
};

export default WeAreExperts;
