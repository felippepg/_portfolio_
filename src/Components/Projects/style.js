import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5em;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  padding: 1em 1em 1em 0;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageArea = styled.div`
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 3em;
  }
`;
export const TextArea = styled.div`
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
