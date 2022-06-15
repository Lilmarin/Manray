import styled from "styled-components";

export const SpotsComercialesContainer = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;

export const TitleSpots = styled.div`
  width: 68%;
  margin: 2em 0 0 auto;
  @media (max-width: 900px) {
    width: 92%;
  }
`;

export const SpanComerciales = styled.span`
  border-top: 2px solid #ffffff;
  line-height: 140px;
  @media (max-width: 1100px) {
    border-top: 1px solid #ffffff;
    line-height: 55px;
  }
`;

export const GridSpotsComerciales = styled.div`
  width: 90%;
  min-height: 5vh;
  display: grid;
  grid-template-columns: 54% 43.2%;
  grid-gap: 2.8%;
  @media (max-width: 1100px) {
    margin: 1em auto 0em;
    width: 90%;
  }
`;

export const DivSpotsContainer = styled.div`
  margin: 1.5em 0 2em auto;
  text-align: right;
  max-width: 83%;
  border-right: 2px solid #ffffff;
  padding: 1em 1em 1em 0;
  @media (max-width: 1100px) {
    max-width: 90%;
  }
`;
