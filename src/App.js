import logo from './logo.svg';
import './App.css';
import Form from "./Form";

logo;

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true},
  { id: 2, content: "skończyć kurs", done: false},
];

function App() {
  return (
    <div>
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
    </div>
  );
}

export default App;
