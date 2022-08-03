import React from "react";
// import { NavLink } from "react-router-dom";
// import { Montserrat500white12 } from "../General.elements";
import ReactPlayer from "react-player";
import {
  // AbsolutLeftContainer,
  // HeaderContainer,
  // TextTop,
  HeaderContainer2,
} from "./Header.elements";

const Header = (props) => {
  return (
    <>
      {/* <HeaderContainer>
        <AbsolutLeftContainer />
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
      </HeaderContainer> */}
      <HeaderContainer2>
        <ReactPlayer
          url="https://www.youtube.com/embed/xB94bwSNxEY"
          playing={true}
          width="100%"
          height="780px"
          volume={false}
          loop={true}
          controls={true}
        />
      </HeaderContainer2>
    </>
  );
};

export default Header;
