import styled from "styled-components";

export const VideosCorporativosTitle = styled.div`
  width: 95%;
  margin: 0 0 0 auto;
`;

export const ParagraphVideosText = styled.div`
  margin-top: -3em;
`;

export const GridVideosCorporativos = styled.div`
  display: grid;
  grid-template-columns: 54% 43%;
  grid-gap: 3%;
  margin: 1.5em 0;
  @media (max-width: 1100px) {
    width: 90%;
    margin: 1.5em auto 0.5em;
  }
`;

export const VideoCorpTextLeft = styled.div`
  padding: 90px 0 50px 10%;
  max-width: 65%;
  @media (max-width: 1100px) {
    padding: 0.5em 0 0.5em 6%;
    max-width: 91%;
    border-left: 2px solid #ffffff;
    margin-top: 2em;
  }
`;
