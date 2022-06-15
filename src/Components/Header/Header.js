import React from "react";
import { NavLink } from "react-router-dom";
import { Montserrat500white12 } from "../General.elements";
import { HeaderContainer, TextTop } from "./Header.elements";

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <NavLink
          to=""
          onClick={() => {
            props.executeScroll(props.contactanosRef);
          }}
        >
          <TextTop>
            <Montserrat500white12>
              CONTACTO
              <br />
              ___
            </Montserrat500white12>
          </TextTop>
        </NavLink>
      </HeaderContainer>
    </>
  );
};

export default Header;
