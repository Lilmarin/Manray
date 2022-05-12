import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 12%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #000000;
  padding: 55px 15px 10px 15px;
`;
export const StyledLogotipe = styled.div`
  background-color: black;
  z-index: 101;
  position: relative;
`;

export const NavBarWrapper = styled.div`
  align-items: left;
`;

export const Menu = styled.div`
  width: 100%;
  margin-top: 1em;
  position: absolute;
  background-color: #000000;
  left: ${({ click }) => (click ? "0px" : "-100%")};
  transition: 0.5s all ease-in;
  height: 100%;
`;

export const MenuItem = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  padding: 12px 0 12px 25px;
  color: #ffffff;
  font-style: normal;
  margin: 0;
  transition: 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    /*Esta linea de código me ayuda a pintar de color amarillo de izquierda a derecha */
    box-shadow: inset 200px 0 0 0 #ff9c41;
  }
`;

export const IconLogoHamburger = styled.div`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  margin: ${({ click }) =>
    click ? "-40px 1em 1em 10px" : " 0em 1em 1em 10px"};
  z-index: 100;
  -webkit-transition: 0.5s linear;
  transition: 0.4s linear;
`;
