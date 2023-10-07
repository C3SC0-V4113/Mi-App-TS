import { Counter, TimerPadre, Usuario } from "./components";

function App() {
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>useEffect + useRef</h2>
      <TimerPadre />
    </>
  );
}

export default App;
