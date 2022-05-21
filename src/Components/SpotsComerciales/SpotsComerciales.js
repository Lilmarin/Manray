import React from "react";
import {
  Montserrat400white16,
  Montserrat900white96,
  StrokedText,
  ImagenSpots,
} from "../General.elements";
import {
  DivSpotsContainer,
  GridSpotsComerciales,
  SpotsComercialesContainer,
  TitleSpots,
} from "./SpotsComerciales.elements";
import SpotsComercialesPanicpng from "../../img/May/Manray_SpotComerciales_PanicBotanic.png";
import SpotsComercialesPanicgif from "../../img/May/Manray_SpotComerciales_PanicBotanic.gif";
import Manray_SpotComerciales_ISADjpg from "../../img/May/Manray_SpotComerciales_ISAD.jpg";
import Manray_SpotComerciales_ISADgif from "../../img/May/Manray_SpotComerciales_ISAD.gif";
import Manray_SpotComerciales_TeporacasCUUjpg from "../../img/May/Manray_SpotComerciales_TeporacasCUU.jpg";
import Manray_SpotComerciales_TeporacasCUUgif from "../../img/May/Manray_SpotComerciales_TeporacasCUU.gif";
import Manray_SpotComerciales_Bankaoolpng from "../../img/May/Manray_SpotComerciales_Bankaool.png";
import Manray_SpotComerciales_Bankaoolgif from "../../img/May/Manray_SpotComerciales_Bankaool.gif";

const SpotsComerciales = () => {
  return (
    <>
      <SpotsComercialesContainer>
        <TitleSpots>
          <Montserrat900white96>
            <StrokedText style={{ textTransform: "uppercase" }}>
              Spots
              <br />
              <span
                style={{
                  borderTop: "2px solid #ffffff",
                  lineHeight: "140px",
                }}
              >
                Comerciales
              </span>
            </StrokedText>
          </Montserrat900white96>
        </TitleSpots>
        <GridSpotsComerciales>
          <div>
            <ImagenSpots
              urlJpg={SpotsComercialesPanicpng}
              urlGif={SpotsComercialesPanicgif}
              minHeightSpecific={"417px"}
              widthSpecific={"100%"}
            ></ImagenSpots>

            <ImagenSpots
              style={{ margin: "30px 0 0 auto" }}
              urlJpg={Manray_SpotComerciales_ISADjpg}
              urlGif={Manray_SpotComerciales_ISADgif}
              minHeightSpecific={"247px"}
              widthSpecific={"79%"}
            />
          </div>
          <div>
            <ImagenSpots
              urlJpg={Manray_SpotComerciales_TeporacasCUUjpg}
              urlGif={Manray_SpotComerciales_TeporacasCUUgif}
              minHeightSpecific={"247px"}
              widthSpecific={"100%"}
            />
            <ImagenSpots
              style={{ margin: "30px 0 0 auto" }}
              urlJpg={Manray_SpotComerciales_Bankaoolpng}
              urlGif={Manray_SpotComerciales_Bankaoolgif}
              minHeightSpecific={"334px"}
              widthSpecific={"100%"}
            />
            <DivSpotsContainer>
              <Montserrat400white16>
                Déjanos ayudarte a encontrar la forma ideal de
                <strong>mostrar lo mejor de tu marca,</strong> definir los
                atributos visuales más importantes para mostrar tu producto y
                plasmarlos en imágenes que enamoren
                <strong>a tu audiencia.</strong>
              </Montserrat400white16>
            </DivSpotsContainer>
          </div>
        </GridSpotsComerciales>
      </SpotsComercialesContainer>
    </>
  );
};

export default SpotsComerciales;
