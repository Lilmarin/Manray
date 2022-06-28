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
  SpanComerciales,
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
import Manray_SpotComercial_Nascar from "../../img/May/Manray_SpotComercial_Nascar.png";
import Manray_SpotComerciales_nascargif from "../../img/May/Manray_SpotComerciales_nascargif.gif";
import ManraySpotsMobileImage1 from "../../img/June/Manray_SpotComerciales_PanicBotanic1.png";
import ManraySpotsMobileImage2 from "../../img/June/Manray_SpotComerciales_TeporacasCUU2.png";
import ManraySpotsMobileImage3 from "../../img/June/Manray_SpotComerciales_ISAD4.png";
import ManraySpotsMobileImage4 from "../../img/June/Manray_SpotComerciales_Bankaool4.png";
import ManraySpotsMobileImage5 from "../../img/June/Manray_SpotComercial_Nascar5.png";

const SpotsComerciales = ({ spotscomercialesRef }) => {
  return (
    <>
      <SpotsComercialesContainer ref={spotscomercialesRef}>
        <TitleSpots>
          <Montserrat900white96>
            <StrokedText style={{ textTransform: "uppercase" }}>
              Spots
              <br />
              <SpanComerciales>Comerciales</SpanComerciales>
            </StrokedText>
          </Montserrat900white96>
        </TitleSpots>
        <GridSpotsComerciales>
          <div>
            <ImagenSpots
              urlJpg={SpotsComercialesPanicpng}
              urlGif={SpotsComercialesPanicgif}
              minHeightSpecific={"417px"}
              minHeightSpecificMobile={"130px"}
              widthSpecific={"100%"}
              imgmobile={ManraySpotsMobileImage1}
            ></ImagenSpots>

            <ImagenSpots
              urlJpg={Manray_SpotComerciales_ISADjpg}
              urlGif={Manray_SpotComerciales_ISADgif}
              minHeightSpecific={"247px"}
              widthSpecific={"79%"}
              marginImagenSpots={"30px 0 0 auto"}
              marginImagenSpotsMobile={"10px 0 0 auto"}
              minHeightSpecificMobile={"85px"}
              imgmobile={ManraySpotsMobileImage3}
            />
            <ImagenSpots
              urlJpg={Manray_SpotComercial_Nascar}
              urlGif={Manray_SpotComerciales_nascargif}
              minHeightSpecific={"286px"}
              widthSpecific={"100%"}
              marginImagenSpots={"30px 0 0 auto"}
              marginImagenSpotsMobile={"10px 0 0 auto"}
              minHeightSpecificMobile={"100px"}
              imgmobile={ManraySpotsMobileImage5}
            />
          </div>
          <div>
            <ImagenSpots
              urlJpg={Manray_SpotComerciales_TeporacasCUUjpg}
              urlGif={Manray_SpotComerciales_TeporacasCUUgif}
              minHeightSpecific={"247px"}
              widthSpecific={"100%"}
              minHeightSpecificMobile={"85px"}
              imgmobile={ManraySpotsMobileImage2}
            />
            <ImagenSpots
              marginImagenSpots={"30px 0 0 auto"}
              urlJpg={Manray_SpotComerciales_Bankaoolpng}
              urlGif={Manray_SpotComerciales_Bankaoolgif}
              minHeightSpecific={"334px"}
              widthSpecific={"100%"}
              marginImagenSpotsMobile={"10px 0 0 auto"}
              minHeightSpecificMobile={"100px"}
              imgmobile={ManraySpotsMobileImage4}
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
