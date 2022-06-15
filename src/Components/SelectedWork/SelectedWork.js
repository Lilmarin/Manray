import React from "react";
import {
  Montserrat500white14,
  Montserrat700white12122,
  Montserrat400white16,
  Montserrat900white88,
  StrokedText,
} from "../General.elements";
import {
  GridImageneS,
  ImagencincoSelected,
  ImagencuatroSelected,
  ImagendosSelected,
  ImagenseisSelected,
  ImagentresSelected,
  ImagenUnoSelected,
  SelectedWorkContainer,
  SelectedWorkImagenes,
  SelectedWorkParagraph,
  SelectedWorkTitle,
  SelectedWorkNew,
  TextBottomSelectedWork,
} from "./SelectedWork.elements";
import "./SelectedWork.scss";

const SelectedWork = ({ selectedworkRef }) => {
  return (
    <>
      <SelectedWorkContainer
        ref={selectedworkRef}
        className="SelectedWork-Container"
      >
        <SelectedWorkTitle>
          <Montserrat700white12122>Selected</Montserrat700white12122>
          <svg
            width="67%"
            height="3"
            viewBox="0 0 490 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1.45779L489.507 1.45781"
              stroke="white"
              stroke-width="1.75515"
            />
          </svg>
          <Montserrat900white88
            style={{ textAlign: "right", marginTop: "-.5em" }}
          >
            <StrokedText> WORK</StrokedText>
          </Montserrat900white88>
        </SelectedWorkTitle>
        <SelectedWorkParagraph className="SelectedWorkParagraph-Container">
          <SelectedWorkNew>
            <Montserrat500white14 className="SelectedWork-Text-Specific">
              Nuestro propósito encontrar a través de la experimentación nuevas
              formas de generar imágenes en movimiento que logren transmitir el
              mensaje que necesitas comunicar de la manera más eficiente y
              creativa posible.
            </Montserrat500white14>
          </SelectedWorkNew>
        </SelectedWorkParagraph>
      </SelectedWorkContainer>
      <SelectedWorkImagenes className="Selector-De-Imagenes-Content">
        <ImagenUnoSelected />
        <GridImageneS>
          <div className="grid-content-selected left">
            <ImagendosSelected />
            <ImagentresSelected />
            <TextBottomSelectedWork>
              <Montserrat400white16 className="Texto-boton-SelextedWork">
                <strong> Sabemos que tus tiempos son importantes</strong> <br />
                <br />
                Cada proyecto en el que colaboramos es una producción
                especializada que se adapta a las necesidades de comunicación
                concretas para llegar a <strong> tu audiencia</strong>
              </Montserrat400white16>
            </TextBottomSelectedWork>
          </div>
          <div className="grid-content-selected right">
            <ImagencuatroSelected />
            <ImagencincoSelected />
            <ImagenseisSelected />
          </div>
        </GridImageneS>
      </SelectedWorkImagenes>
    </>
  );
};

export default SelectedWork;
