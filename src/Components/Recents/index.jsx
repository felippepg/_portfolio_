import { Box, Container, Recents, RecentsCards, Photo } from './style';
import { Title, Button, Content } from '../UI';
import SmartBank from '../../assets/images/smartbank.png';
import Covid from '../../assets/images/Covid-19.png';

export default function () {
  return (
    <Box>
      <Container id="recents">
        <Title primary>Projetos Recentes</Title>
        <Recents>
          <RecentsCards>
            <Photo src={SmartBank} />
            <Content>
              O projeto é uma página de um banco digital desenvolvida em React
              no curso da Alura sobre Styled Components. Também foi utilizado o
              Prettier para padronizar o código e foi desenvolvida a feature de
              temas
            </Content>
            <Button href="https://github.com/felippepg/smartbank">
              Conhecer Projeto
            </Button>
          </RecentsCards>

          <RecentsCards>
            <Photo src={Covid} />
            <Content>
              Esse projeto foi desenvolvido no Bootcamp Carrefour da DIO, a
              aplicação consiste em uma PWA que faz uma consulta em uma API e
              disponibiliza os dados relacionados a COVID 19 em alguns países.
              Para a construção da aplicação foi utilizado o React juntamente
              com o Material Ui para interface gráfica
            </Content>
            <Button href="https://github.com/felippepg/covid-19">
              Conhecer Projeto
            </Button>
          </RecentsCards>
        </Recents>
      </Container>
    </Box>
  );
}
