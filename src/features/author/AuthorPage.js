import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Jakub Jachacz"
      body={
        <>
          <p>
            Cześć! Nazywam się Jakub i mieszkam w Lublinie.
          </p>
          <p>
            Uwielbiam słuchać muzyki i planuję w przyszłości nauczyć się gry na gitarze.
          </p>
          <p>
            Na Frontend natknąłem się przypadkiem, ale była to <strong>miłość od pierwszego wejrzenia.</strong> Chcę doskonalić się w tym kierunku i pewnego dnia móc nazwać się Seniorem.
          </p>
        </>
      }
    />
  </Container>
);