import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  z-index: 110;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTop = styled.div`
  width: 100%;
  min-height: 80px;
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 50px;
  padding-top: 73px;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px;
  }
`;

export const LineBorder = styled.div`
  min-height: 1.5px;
  background-color: #ffffff;
  width: 100%;
`;

export const FooterBottom = styled.div`
  min-height: 60px;
  width: 84%;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  @media (max-width: 1100px) {
    width: 90%;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 1em 0 1em;
  }
`;

export const FooterbottomLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterbottomRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1100px) {
    justify-content: center;
    margin-top: 1em;
  }
`;

export const FooterTopLeft = styled.div`
  width: 100%;
  min-height: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export const FooterTopRight = styled.div`
  width: 100%;
  min-height: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const LogotipoManrayFooter = styled.div`
  min-height: 67px;
  min-width: 67px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.urllogo});
  @media (max-width: 1100px) {
    min-height: 123px;
    min-width: 123px;
    margin-bottom: 2em;
  }
`;

export const Infofooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 110%;
  @media (max-width: 1100px) {
    width: 85%;
    margin-bottom: 1.5em;
  }
`;
export const Infofooter2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2em;
  @media (max-width: 1100px) {
    padding-left: 0;
    margin-bottom: 1.5em;
  }
`;

export const ContentLinksAndFollow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1100px) {
    width: 85%;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const NothingContentdiv = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Links = styled.div``;
export const FollowUs = styled.div``;

export const ContentLinksAndFollow2 = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(3, 1fr);
`;
