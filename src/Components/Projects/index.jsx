/* eslint-disable react/prop-types */
import { Card, TextArea, Title, ImageArea, Photo } from './style';
import { Button, Content } from '../UI';

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
