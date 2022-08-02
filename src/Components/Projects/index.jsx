/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5em;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  padding: 1em 1em 1em 0;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.a`
  padding: 0.5em;
  margin-top: 1em;
  text-decoration: none;
  color: white;
  background-color: #ffa217;
  border-radius: 3px;
`;

const Content = styled.p`
  color: #9c9c9c;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin-bottom: 1em;
`;

const ImageArea = styled.div`
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 3em;
  }
`;
const TextArea = styled.div`
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

function Projects({ title, content, img, link }) {
  return (
    <Card>
      <TextArea>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Button href={link}>Conhecer Projeto</Button>
      </TextArea>
      <ImageArea>
        <Photo src={img} alt={title} />
      </ImageArea>
    </Card>
  );
}

function ReverseProject({ title, content, img, link }) {
  return (
    <Card>
      <ImageArea>
        <Photo src={img} alt={title} />
      </ImageArea>
      <TextArea>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Button href={link}>Conhecer Projeto</Button>
      </TextArea>
    </Card>
  );
}

export { Projects, ReverseProject };
