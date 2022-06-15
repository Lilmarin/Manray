import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { CuerpoContenido } from "../Components/General.elements";
import Footer from "../Components/Footer/Footer";

export default function PageWrapper(props) {
  return (
    <React.Fragment>
      <NavBar
        executeScroll={props.executeScroll}
        selectedworkRef={props.selectedworkRef}
        spotscomercialesRef={props.spotscomercialesRef}
        videoscorporativosRef={props.videoscorporativosRef}
        animacionRef={props.animacionRef}
        videosmusicalesRef={props.videosmusicalesRef}
        podcastRef={props.podcastRef}
        nuestroprocesoRef={props.nuestroprocesoRef}
        contactanosRef={props.contactanosRef}
      />
      <CuerpoContenido>
        {props.children}
        <Footer />
      </CuerpoContenido>
    </React.Fragment>
  );
}
