import { Container, Title } from './style';
import { Projects, ReverseProject } from '../Projects';
import Pokemon from '../../assets/images/Pokedex.png';
import AluraBooks from '../../assets/images/Alurabooks.png';
import Adocao from '../../assets/images/Adocao.png';
import Covid from '../../assets/images/Covid-19.png';

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
        title="Covid-19"
        content="Esse projeto foi desenvolvido no Bootcamp Carrefour da DIO, a aplicação consiste em uma PWA que faz uma
          consulta em uma API e disponibiliza os dados relacionados a COVID 19 em alguns países. Para a construção da aplicação
          foi utilizado o React juntamente com o Material Ui para interface gráfica"
        img={Covid}
        link="https://github.com/felippepg/covid-19"
      />
    </Container>
  );
}
