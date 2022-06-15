import styled from "styled-components";

export const ExpertsContainer = styled.div`
  width: 90%;
  min-height: 80vh;
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1100px) {
    min-height: auto;
    padding: 4em 0;
    width: 95%;
  }
`;

export const ExpertGrid = styled.div`
  display: grid;
  grid-template-columns: 74% 26%;
  @media (max-width: 1100px) {
    grid-template-columns: 100%;
  }
`;

export const GridExpertLeft = styled.div`
  width: 100%;
`;

export const GridExpertRight = styled.div`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em;
  border-left: 2px solid #ffffff;
  @media (max-width: 1100px) {
    width: 35%;
    margin: -2em 1.5em 0 auto;
    padding: 0 0 1em 0.5em;
    border-right: 2px solid #ffffff;
    border-left: none;
    text-align: right;
  }
`;
