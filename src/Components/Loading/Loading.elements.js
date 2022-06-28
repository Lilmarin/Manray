import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;

  min-height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageLoading = styled.img`
  @media (max-width: 1100px) {
    max-width: 80%;
    width: 80%;
    min-height: 10vh;
  }
`;
