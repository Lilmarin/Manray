import styled from "styled-components";

export const PodcastContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 4em;
  @media (max-width: 1100px) {
    width: 90%;
    min-height: auto;
    padding-bottom: 0em;
    margin: 0em auto;
  }
`;

export const PodcastTitle = styled.div`
  grid-template-columns: 58% 36%;
  display: grid;
  grid-gap: 6%;
  @media (max-width: 1100px) {
    grid-template-columns: 100%;
    display: grid;
    grid-gap: 0;
  }
`;

export const SubtitlePodcast = styled.div`
  margin: 0 0 0 auto;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TitlePodcastUp = styled.div`
  border-bottom: 2px solid #ffffff;
  @media (max-width: 1100px) {
    text-align: end;
    width: 70%;
    margin: 0em 0em 0.2em auto;
  }
`;

export const PodcastContent = styled.div`
  width: 88%;
  min-height: 10vh;
  display: grid;
  grid-template-columns: 43% 54%;
  grid-gap: 3%;
  margin: 56px 0 5em auto;
  @media (max-width: 1100px) {
    width: 100%;
    margin: 40px 0 0em auto;
  }
`;

export const TextLastPodcast = styled.div`
  margin: 29px 0 0 auto;
  min-height: 156px;
  width: 51%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  justify-content: center;
  @media (max-width: 1100px) {
    width: 75%;
  }
`;
