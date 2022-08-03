import styled from 'styled-components';

export const Box = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 1000px;
  margin: auto;

  h1 {
    color: white;
  }

  @media screen and (max-width: 1024px) {
    width: auto;
  }
`;

export const Recents = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const RecentsCards = styled.div`
  width: 45%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 1em;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 70%;
  border: 1px solid white;
  margin-bottom: 3em;

  @media screen and (max-width: 1024px) {
    margin-bottom: 1em;
  }
`;
