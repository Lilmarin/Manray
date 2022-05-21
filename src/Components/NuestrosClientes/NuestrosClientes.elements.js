import styled from "styled-components";

export const NuestrosClientesContainer = styled.div`
  width: 90%;
  margin: 0 0 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleContentClients = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding-bottom: 1.5em;
  border-bottom: 3px solid #ffffff;
`;

export const ParagraphContentClients = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  max-width: 90%;
  margin: auto 0 auto auto;
`;

export const GridImageClients = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 25px 0;
  grid-gap: 30px;
`;

export const ImagenClientesOurs = styled.div`
  width: ${(props) => props.imgSpecificWidth};
  background-image: url(${(props) => props.backgroundContent});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: ${(props) => props.imgMinHeight};
`;
