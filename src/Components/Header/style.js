import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  color: white;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 25vh;

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: #9c9c9c;
    width: 80%;
  }

  div {
    padding-right: 5em;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 2vh;

    p {
      width: 100%;
      font-size: 13px;
      font-weight: 300;
    }

    div {
      padding: 1em;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  margin-bottom: 0.8em;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5em;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const Card = styled.a`
  font-size: 18px;
  background-color: #3f8e00;
  color: white;
  padding: 1em;
  width: 30%;
  margin-top: 0.5em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #62ba1b;
  border-radius: 3px;

  @media screen and (max-width: 1024px) {
    font-size: 1em;
    text-align: center;
    padding: 0.5em;
    margin-top: 5vh;
  }
`;

export const Photo = styled.img`
  width: 320px;
  height: 320px;
  border: 1px solid #000;
  border-radius: 100%;
  border: 3px solid #62ba1b;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 40%;
  }
`;
