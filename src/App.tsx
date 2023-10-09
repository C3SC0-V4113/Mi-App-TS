import { Counter, TimerPadre, Usuario } from "./components";
import { ContadorRed } from "./components/ContadorRed";

function App() {
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>useEffect + useRef</h2>
      <TimerPadre />
      <h2></h2>
      <hr />
      <ContadorRed />
    </>
  );
}

export default App;
