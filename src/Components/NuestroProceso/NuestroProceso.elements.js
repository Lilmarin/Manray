import styled from "styled-components";
export const TitleWithBorder = styled.div`
  border-bottom: 2.5px solid #ffffff;
  padding-left: 50px;
  margin-top: 15em;
`;

export const TitlewithoutBorder = styled.div`
  margin: 0 0 0 auto;
`;

export const ImagenProcess = styled.div`
  width: 100%;
  min-height: 477px;
  background-image: url(${(props) => props.urlimage});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 4em;
  margin-bottom: 5em;
`;

export const TextBottomProcess = styled.div`
  width: 50%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5em;
`;
