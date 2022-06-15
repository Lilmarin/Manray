import styled from "styled-components";

export const GridVideosMusicales = styled.div`
  display: grid;
  grid-template-columns: 55% 41%;
  grid-gap: 4%;
  min-height: 95vh;
  align-items: center;
  padding-bottom: 10em;
  @media (max-width: 1100px) {
    min-height: auto;
    margin: 2em 1em 0em;
    padding-bottom: 3em;
    grid-template-columns: 55% 44%;
    grid-gap: 1%;
  }
`;

export const ContainerGridIndividual = styled.div`
  width: 100%;
`;

export const MusicalesContent = styled.div`
  margin: -1em 0 0 auto;
  text-align: right;
`;
