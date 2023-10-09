import {
  ContadorRed,
  Counter,
  Formulario,
  TimerPadre,
  Usuario,
} from "./components";

function App() {
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>useEffect + useRef</h2>
      <TimerPadre />
      <h2>useReducer</h2>
      <hr />
      <ContadorRed />
      <h2>customHooks</h2>
      <hr />
      <Formulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
