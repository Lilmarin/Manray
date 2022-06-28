import React, { Suspense } from "react";
import "react-app-polyfill/stable";
import Header from "../Components/Header/Header";
import SiguienteNivel from "../Components/SiguienteNivel/SiguienteNivel";
import { Alltheboxes } from "../Components/General.elements";
import Loading from "../Components/Loading/Loading";

const SelectedWork = React.lazy(() =>
  import("../Components/SelectedWork/SelectedWork")
);
const WeAreExperts = React.lazy(() =>
  import("../Components/WeAreExperts/WeAreExperts")
);
const SpotsComerciales = React.lazy(() =>
  import("../Components/SpotsComerciales/SpotsComerciales")
);
const NuestrosClientes = React.lazy(() =>
  import("../Components/NuestrosClientes/NuestrosClientes")
);
const VideosCorporativos = React.lazy(() =>
  import("../Components/VideosCorporativos/VideosCorporativos")
);
const Animacion2d = React.lazy(() =>
  import("../Components/Animacion2d/Animacion2d")
);
const Videosmusicales = React.lazy(() =>
  import("../Components/VideosMusicales/Videosmusicales")
);
const Podcast = React.lazy(() => import("../Components/Podcast/Podcast"));
const NuestroProceso = React.lazy(() =>
  import("../Components/NuestroProceso/NuestroProceso")
);
const Contactanos = React.lazy(() =>
  import("../Components/Contactanos/Contactanos")
);

const Index = (props) => {
  return (
    <>
      <Header
        contactanosRef={props.contactanosRef}
        executeScroll={props.executeScroll}
      />

      <Suspense fallback={<Loading />}>
        <SiguienteNivel />
      </Suspense>
      <Alltheboxes>
        <Suspense fallback={<Loading />}>
          <SelectedWork selectedworkRef={props.selectedworkRef} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <WeAreExperts
            contactanosRef={props.contactanosRef}
            executeScroll={props.executeScroll}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <SpotsComerciales spotscomercialesRef={props.spotscomercialesRef} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <NuestrosClientes />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <VideosCorporativos
            videoscorporativosRef={props.videoscorporativosRef}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Animacion2d animacionRef={props.animacionRef} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Videosmusicales videosmusicalesRef={props.videosmusicalesRef} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Podcast podcastRef={props.podcastRef} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <NuestroProceso nuestroprocesoRef={props.nuestroprocesoRef} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          {" "}
          <Contactanos contactanosRef={props.contactanosRef} />
        </Suspense>
      </Alltheboxes>
    </>
  );
};

export default Index;
