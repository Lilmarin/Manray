import React, { useState } from "react";
import {
  IconLogoHamburger,
  MenuItem,
  Menu,
  NavBarContainer,
  NavBarWrapper,
  StyledLogotipe,
} from "./Navbar.elements";
import logotipo from "../../img/May/Manray_Logotipo_Navbar.png";
import "./NavBar.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <>
      <NavBarContainer className="NavBar-Component">
        <NavBarWrapper className="NavBar-Wrapper">
          <StyledLogotipe>
            <img className="NavBar-Logotipo" src={logotipo} alt="Manray" />
          </StyledLogotipe>
          <IconLogoHamburger click={click} onClick={() => ChangeClick()}>
            <svg
              width="28"
              height="13"
              viewBox="0 0 28 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="25" y2="0.5" stroke="white" />
              <line y1="12.5" x2="25" y2="12.5" stroke="white" />
              <line y1="6.5" x2="28" y2="6.5" stroke="white" />
            </svg>
          </IconLogoHamburger>
          <Menu click={click}>
            <MenuItem onClick={() => ChangeClick()}>Home</MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Selected work</MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Spot comerciales</MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              Videos corporativos
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Podcast</MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Animación 2D</MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Videos musicales</MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Nuestro proceso </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>Contactanos</MenuItem>

            <MenuItem onClick={() => ChangeClick()}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="12.6778"
                  y1="12.7631"
                  x2="32.9288"
                  y2="32.0995"
                  stroke="white"
                />
                <line
                  x1="32.6104"
                  y1="13.1471"
                  x2="12.8114"
                  y2="32.9461"
                  stroke="white"
                />
              </svg>
            </MenuItem>
          </Menu>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
