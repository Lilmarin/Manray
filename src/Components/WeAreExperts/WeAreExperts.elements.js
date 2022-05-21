import styled from "styled-components";

export const ExpertsContainer = styled.div`
  width: 90%;
  min-height: 80vh;
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ExpertGrid = styled.div`
  display: grid;
  grid-template-columns: 74% 26%;
`;

export const GridExpertLeft = styled.div`
  width: 100%;
`;

export const GridExpertRight = styled.div`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em;
  border-left: 2px solid #ffffff;
`;
