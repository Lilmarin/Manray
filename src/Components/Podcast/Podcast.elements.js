import styled from "styled-components";

export const PodcastContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 4em;
`;

export const PodcastTitle = styled.div`
  grid-template-columns: 58% 36%;
  display: grid;
  grid-gap: 6%;
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
`;

export const PodcastContent = styled.div`
  width: 88%;
  min-height: 10vh;
  display: grid;
  grid-template-columns: 43% 54%;
  grid-gap: 3%;
  margin: 56px 0 5em auto;
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
`;
