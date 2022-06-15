import styled from "styled-components";

export const Animacion2dContainer = styled.div`
  height: 10vh;
  margin: 10em 0 5em auto;
  @media (max-width: 1100px) {
    margin: 4em auto 0em;
    height: auto;
  }
`;

export const ContainertitleStroked = styled.div`
  margin-top: -8.5em;
  text-align: right;
  @media (max-width: 1100px) {
    margin-top: -5.1em;
  }
`;

export const GridAnimation2d = styled.div`
  display: grid;
  grid-template-columns: 42% 55%;
  grid-gap: 3%;
  margin: 3em 0 3em;
  @media (max-width: 1100px) {
    margin: 0.5em auto 0em;
    width: 90%;
  }
`;

export const DiferenteParagraph = styled.div`
  max-width: 60%;
  padding: 2.5em 0 2em;
  @media (max-width: 1100px) {
    max-width: 85%;
  }
`;
