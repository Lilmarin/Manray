import React, { useState } from "react";
import {
  IconLogoHamburger,
  MenuItem,
  Menu,
  NavBarContainer,
  NavBarWrapper,
  StyledLogotipe,
} from "./Navbar.elements";
import logotipo from "../../img/May/Manray_Logotipo_Header.png";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <>
      <NavBarContainer click={click} className="NavBar-Component">
        <NavBarWrapper className="NavBar-Wrapper">
          <StyledLogotipe click={click}>
            <NavLink to="/">
              <img className="NavBar-Logotipo" src={logotipo} alt="Manray" />
            </NavLink>
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
            <NavLink to="/">
              <MenuItem onClick={() => ChangeClick()}>Home</MenuItem>
            </NavLink>
            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.selectedworkRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>Selected work</MenuItem>
            </NavLink>
            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.spotscomercialesRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>
                Spot comerciales
              </MenuItem>
            </NavLink>
            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.videoscorporativosRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>
                Videos corporativos
              </MenuItem>
            </NavLink>
            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.podcastRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>Podcast</MenuItem>
            </NavLink>
            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.animacionRef);
              }}
            >
              {" "}
              <MenuItem onClick={() => ChangeClick()}>Animación 2D</MenuItem>
            </NavLink>
            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.videosmusicalesRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>
                Videos musicales
              </MenuItem>
            </NavLink>

            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.nuestroprocesoRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>
                Nuestro proceso{" "}
              </MenuItem>
            </NavLink>

            <NavLink
              to=""
              onClick={() => {
                props.executeScroll(props.contactanosRef);
              }}
            >
              <MenuItem onClick={() => ChangeClick()}>Contactanos</MenuItem>
            </NavLink>
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
