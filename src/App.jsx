import "./App.css";
import Container from "./components/Container";
import { ListProvider } from "./store/ListProvider";

function App() {
  return (
    <>
      <ListProvider>
        <Container />
      </ListProvider>
    </>
  );
}

export default App;
