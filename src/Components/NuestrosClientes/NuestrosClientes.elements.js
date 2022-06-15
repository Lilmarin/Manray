import styled from "styled-components";

export const NuestrosClientesContainer = styled.div`
  width: 90%;
  margin: 0 0 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1100px) {
    min-height: auto;
    padding: 2em 0;
    width: 90%;
    margin: 0 auto;
  }
`;

export const TitleContentClients = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding-bottom: 1.5em;
  border-bottom: 3px solid #ffffff;
  @media (max-width: 1100px) {
    grid-template-columns: 100%;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #ffffff;
    text-align: end;
  }
`;

export const ParagraphContentClients = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  max-width: 90%;
  margin: auto 0 auto auto;
`;

export const GridImageClients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
  grid-gap: 30px;
  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const ImagenClientesOurs = styled.div`
  width: ${(props) => props.imgSpecificWidth};
  background-image: url(${(props) => props.backgroundContent});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: ${(props) => props.imgMinHeight};
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
