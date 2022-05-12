import styled from "styled-components";
import ImgJpg from "../../img/May/Manray_Header.jpg";
import ImgGif from "../../img/May/Manray_Header.gif";

export const HeaderContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  top: 0;
  margin: 0;
  z-index: 50;
  background-image: url(${ImgJpg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${ImgGif});
  }
`;

export const TextTop = styled.div`
  position: absolute;
  top: 91px;
  right: 3.5%;
  text-align: right;
  align-items: right;
`;
