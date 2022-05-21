import styled from "styled-components";
import ImgCatJpg from "../../img/May/Manray_Selectedwork_Catrina.jpg";
import ImgCatGif from "../../img/May/Manray_Selectedwork_Catrina.gif";
import OnceUponaTimejpg from "../../img/May/Manray_SelectedWork_OnceUponATime.jpg";
import OnceUponaTimegif from "../../img/May/Manray_SelectedWork_OnceUponATime.gif";
import Manray_SelectedWork_Chefsjpg from "../../img/May/Manray_SelectedWork_Chefs.png";
import Manray_SelectedWork_Chefsgift from "../../img/May/Manray_SelectedWork_Chefs.gif";
import Manray_SelectedWork_TrailerProditiojpg from "../../img/May/Manray_SelectedWork_TrailerProditio.png";
import Manray_SelectedWork_TrailerProditiogift from "../../img/May/Manray_SelectedWork_TrailerProditio.gif";
import Manray_SelectedWork_TeporacasSierra2022jpg from "../../img/May/Manray_SelectedWork_TeporacasSierra2022.jpg";
import Manray_SelectedWork_TeporacasSierra2022gift from "../../img/May/Manray_SelectedWork_TeporacasSierra2022.gif";
import Manray_SelectedWork_AhChihuahuaTurismojpg from "../../img/May/Manray_SelectedWork_AhChihuahuaTurismo.jpg";
import Manray_SelectedWork_AhChihuahuaTurismogif from "../../img/May/Manray_SelectedWork_AhChihuahuaTurismo.gif";

export const SelectedWorkContainer = styled.div`
  padding: 3em 0;
  display: grid;
  grid-template-columns: 61% 39%;
`;
export const SelectedWorkTitle = styled.div`
  width: 100%;
`;

export const SelectedWorkParagraph = styled.div`
  width: 100%;
`;

export const SelectedWorkImagenes = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ImagenUnoSelected = styled.div`
  width: 59%;
  margin: 25px auto;
  min-height: 380px;
  background-image: url(${ImgCatJpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${ImgCatGif});
  }
`;

export const GridImageneS = styled.div`
  min-height: 10px;
  width: 90%;
  margin: 0 0 50px auto;
  display: grid;
  grid-template-columns: 54% 43%;
  grid-gap: 3%;
`;

export const ImagendosSelected = styled.div`
  width: 100%;
  margin-bottom: 25px;
  min-height: 417px;
  background-image: url(${OnceUponaTimejpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${OnceUponaTimegif});
  }
`;

export const ImagentresSelected = styled.div`
  width: 79%;
  margin: 0 0 0 auto;
  min-height: 329px;
  background-image: url(${Manray_SelectedWork_Chefsjpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${Manray_SelectedWork_Chefsgift});
  }
`;

export const TextBottomSelectedWork = styled.div`
  width: 100%;
  border-left: 2px solid #ffffff;
  padding: 1em;
  margin-top: 4em;
`;

export const ImagencuatroSelected = styled.div`
  width: 100%;
  margin-bottom: 25px;
  min-height: 329px;
  background-image: url(${Manray_SelectedWork_TrailerProditiojpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${Manray_SelectedWork_TrailerProditiogift});
  }
`;

export const ImagencincoSelected = styled.div`
  width: 100%;
  margin-bottom: 25px;
  min-height: 329px;
  background-image: url(${Manray_SelectedWork_TeporacasSierra2022jpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${Manray_SelectedWork_TeporacasSierra2022gift});
  }
`;

export const ImagenseisSelected = styled.div`
  width: 100%;
  min-height: 247px;
  background-image: url(${Manray_SelectedWork_AhChihuahuaTurismojpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${Manray_SelectedWork_AhChihuahuaTurismogif});
  }
`;
