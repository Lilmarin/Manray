import React from "react";
import { ImageLoading, LoadingContainer } from "./Loading.elements";
import loadingimage from "../../img/June/Manray_Loading.gif";

const Loading = () => {
  return (
    <LoadingContainer>
      <ImageLoading src={loadingimage} alt="Cargando" />
    </LoadingContainer>
  );
};

export default Loading;
