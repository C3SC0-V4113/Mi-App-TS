import { useReducer } from "react";

const initialState = {
  counter: 10,
};

type CounterActions =
  | {
      type: "increment";
    }
  | { type: "decrement" }
  | { type: "custom"; payload: number };

const counterReducer = (state: typeof initialState, action: CounterActions) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "custom":
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h2>Contador: {counterState.counter}</h2>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "increment" })}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -1
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};
