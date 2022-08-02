import Navbar from './Navbar';
import Img from '../../assets/images/Felippe.jpeg';
import { Container, Section, About, Title, Card, Photo } from './style';

function Header() {
  return (
    <Container>
      <Navbar />
      <Section>
        <About>
          <Title>Felippe Pires</Title>
          <p>
            Graduado em análise e desenvolvimento pela FATEC (Faculdade e
            Tecnologia de Botucatu) 2021. Há 1 ano estudando programação como
            desenvolvedor front-end com foco em React. Possuo alguns projetos
            com fins didáticos no Github com foco em tecnologias como HTML, CSS,
            Javascript, React além de Node e Mysql. Abaixo apresento alguns
            projetos realizados nessas tecnologias acima.
          </p>

          <Card href="/">Conhecer Projetos</Card>
        </About>
        <div>
          <Photo src={Img} alt="Felippe Pires" />
        </div>
      </Section>
    </Container>
  );
}

export default Header;
