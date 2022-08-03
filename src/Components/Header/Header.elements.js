import styled from "styled-components";
import ImgJpg from "../../img/May/Manray_Header.jpg";
import ImgGif from "../../img/May/Manray_Header.gif";

export const HeaderContainer2 = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  top: 0;
  margin: 0;
  z-index: 50;
  @media (max-width: 600px) {
    min-height: 30vh;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
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
  @media (max-width: 600px) {
    min-height: 30vh;
  }
`;
export const AbsolutLeftContainer = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: inline;
    background-color: yellow;
    position: absolute;
    min-height: 30vh;
    background: linear-gradient(to left, transparent 0%, black 100%);
    width: 25%;
  }
`;

export const TextTop = styled.div`
  position: absolute;
  top: 91px;
  right: 3.5%;
  text-align: right;
  align-items: right;
  z-index: 100;
  @media (max-width: 1100px) {
    display: none;
  }
`;
