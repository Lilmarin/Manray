import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import PageWrapper from "../src/Pages/PageWrapper";
import Gracias from "./Pages/Gracias";

function App() {
  const actuallocation = window.location.pathname;
  const selectedworkRef = useRef(null);
  const spotscomercialesRef = useRef(null);
  const videoscorporativosRef = useRef(null);
  const podcastRef = useRef(null);
  const animacionRef = useRef(null);
  const videosmusicalesRef = useRef(null);
  const nuestroprocesoRef = useRef(null);
  const contactanosRef = useRef(null);

  const executeScroll = (e) => {
    actuallocation === "/"
      ? window.scrollTo({
          top: e.current.offsetTop - 65,
          behavior: "smooth",
        })
      : console.log("pendiente");
    //Hay que mejorar el funcionamiento de esta parte
    //     window.location.replace("/");
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: e.current.offsetTop - 65,
    //     behavior: "smooth",
    //   });
    //   console.log(window.location.pathname);
    // }, 5000);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Gracias" element={<Gracias />} />
        <Route
          path="/"
          element={
            <PageWrapper
              executeScroll={executeScroll}
              selectedworkRef={selectedworkRef}
              spotscomercialesRef={spotscomercialesRef}
              videoscorporativosRef={videoscorporativosRef}
              podcastRef={podcastRef}
              animacionRef={animacionRef}
              videosmusicalesRef={videosmusicalesRef}
              nuestroprocesoRef={nuestroprocesoRef}
              contactanosRef={contactanosRef}
            >
              <Index
                executeScroll={executeScroll}
                selectedworkRef={selectedworkRef}
                spotscomercialesRef={spotscomercialesRef}
                videoscorporativosRef={videoscorporativosRef}
                podcastRef={podcastRef}
                animacionRef={animacionRef}
                videosmusicalesRef={videosmusicalesRef}
                nuestroprocesoRef={nuestroprocesoRef}
                contactanosRef={contactanosRef}
              />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper
              executeScroll={executeScroll}
              selectedworkRef={selectedworkRef}
              spotscomercialesRef={spotscomercialesRef}
              videoscorporativosRef={videoscorporativosRef}
              podcastRef={podcastRef}
              animacionRef={animacionRef}
              videosmusicalesRef={videosmusicalesRef}
              nuestroprocesoRef={nuestroprocesoRef}
              contactanosRef={contactanosRef}
            >
              <Index
                executeScroll={executeScroll}
                selectedworkRef={selectedworkRef}
                spotscomercialesRef={spotscomercialesRef}
                videoscorporativosRef={videoscorporativosRef}
                podcastRef={podcastRef}
                animacionRef={animacionRef}
                videosmusicalesRef={videosmusicalesRef}
                nuestroprocesoRef={nuestroprocesoRef}
                contactanosRef={contactanosRef}
              />
            </PageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
