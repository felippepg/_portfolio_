import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  padding: 1em;
  color: ${(props) => (props.primary ? 'white' : '#000')};

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const Button = styled.a`
  padding: 0.5em;
  margin-top: 1em;
  text-decoration: none;
  color: white;
  background-color: #ffa217;
  border-radius: 3px;
`;

export const Content = styled.p`
  color: #9c9c9c;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin-bottom: 1em;
`;
