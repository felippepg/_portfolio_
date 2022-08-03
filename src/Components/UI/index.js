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
    font-size: 25px;
  }
`;

export const Button = styled.a`
  padding: 0.5em;
  margin-top: 1em;
  text-decoration: none;
  color: white;
  background-color: #ffa217;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  line-height: 25px;
`;

export const Content = styled.p`
  color: #9c9c9c;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 1em;
`;
