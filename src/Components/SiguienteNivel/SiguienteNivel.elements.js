import styled from "styled-components";
import flecha from "../../img/May/GiftFlecha.gif";

export const SiguienteNivelContainer = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1100px) {
    height: auto;
    margin: 3em 0 2em;
  }
`;

export const SiguienteNivelContenido = styled.div`
  width: 93%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 498px;
  @media (max-width: 1100px) {
    grid-template-columns: 65% 35%;
    overflow-x: hidden;
    height: auto;
  }
`;

export const ManrayLogotype = styled.div`
  justify-self: end;
  max-width: 100%;
  @media (max-width: 1100px) {
    align-self: flex-start;
  }
`;

export const WeUnderstand = styled.div`
  width: 100%;
`;

export const TextSpanStrock = styled.span`
  -webkit-text-stroke: 2px #ffffff;
  color: transparent;
  margin-left: 15px;
`;

export const BotomTextsNextLevel = styled.div`
  width: 100%;
  display: grid;
  margin-top: 1em;
  grid-template-columns: 34% 66%;
  @media (max-width: 1100px) {
    grid-template-columns: 55% 45%;
    margin-top: 0.5em;
  }
`;

export const Flecha = styled.div`
  position: absolute;
  bottom: 0;
  left: 1em;
  min-height: 80px;
  min-width: 21px;
  background-image: url(${flecha});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1100px) {
    min-height: 40px;
  }
`;
