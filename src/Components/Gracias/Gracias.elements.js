import styled from "styled-components";

export const GraciasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 95vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ffffff;
`;
export const Linecontainer = styled.div`
  min-height: 6px;
  height: 2px;
  min-width: 100%;
  width: 100%;
  margin-top: -2px;
  position: relative;
  background-color: #ffffff;
`;

export const IMGCamera = styled.img`
  max-width: 35%;
  margin-top: 2em;
  @media (max-width: 1100px) {
    max-width: 80%;
    margin-top: 4em;
  }
`;

export const StrokedTextYellow = styled.span`
  -webkit-text-stroke: 2px #ffffff;
  color: transparent;
  &:hover {
    -webkit-text-stroke: 2px #ff9c41;
    color: #ff9c41;
  }
`;

export const GraciasIMGGift = styled.img`
  position: absolute;
  max-width: 15%;
  margin-top: -15%;
  right: 19%;
  @media (max-width: 1100px) {
    max-width: 28%;
    margin-top: -64%;
    right: 5%;
  }
`;

export const GraciasBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5em 0;
`;

export const LeftContainerThanks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GraciasTitle = styled.div`
  margin: 0.5em auto 0em;
`;

export const GraciasSubtitle = styled.div`
  margin: 0em auto 0.5em;
`;

export const ButtonWhiteThanks = styled.button`
  background-color: #ffffff;
  padding: 8px 26px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  color: #000000;
  border: none;
  margin: 1.5em 0 0 0;
  cursor: pointer;
  :hover {
    transform: translateY(-5%);
    background-color: #ff9c41;
  }
  @media (max-width: 1010px) {
    margin: 1em 0 0.5em;
    font-size: 1.1em;
    padding: 8px 26px;
  }
`;
