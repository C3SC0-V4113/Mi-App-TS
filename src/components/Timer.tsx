import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  miliseconds: number;
};

export const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);

  const ref = useRef<number>();

  useEffect(() => {
    clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), miliseconds);
  }, []);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};
