import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  margin-top: 1em;
  margin-bottom: 0.8em;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const Container = styled.section`
  width: 1000px;
  margin: auto;

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
