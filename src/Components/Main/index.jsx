import { Container } from './style';
import { Title } from '../UI';
import { Projects, ReverseProject } from '../Projects';
import Pokemon from '../../assets/images/Pokedex.png';
import AluraBooks from '../../assets/images/Alurabooks.png';
import Adocao from '../../assets/images/Adocao.png';
import Pirescord from '../../assets/images/pirescord.png';

export default function () {
  return (
    <Container id="projects">
      <Title>Meus Projetos</Title>
      <Projects
        title="Pokedex"
        content="Esse projeto tem como intuito recriar uma pokedex utilizando uma api externa chamada
          PokeAPI. O projeto foi desenvolvido em React utlizando conceitos como flexbox e SASS
          e teve o seu layout previamente desenhado no Adobe XD"
        img={Pokemon}
        link="https://github.com/felippepg/pokedex"
      />
      <ReverseProject
        title="AluraBooks"
        content="O projeto é uma loja virtual realizado no curso da Alura sobre Mobile First, as tecnologias
          utilizadas foram HTML, CSS e Javascript em conjunto com as media querys para construir uma página responsiva"
        img={AluraBooks}
        link="https://felippepg.github.io/AluraBooks/"
      />
      <Projects
        title="Adoçao de Animais"
        content="Esse projeto é a interface grafica do sistema de Adoção de animais, utilizando a API feita em Node.
          Para a criação desse projeto foi utilizado o React juntamente com o Typescript."
        img={Adocao}
        link="https://github.com/felippepg/adocao-animais-frontend"
      />

      <ReverseProject
        title="Pirescord"
        content="O projeto é um chat em tempo real desenvolvido na Imersão React da Alura, utilizando Next.js juntamente
          com o Supabase como backend as a service Pré-requisitos"
        img={Pirescord}
        link="https://github.com/felippepg/pirescord"
      />
    </Container>
  );
}
