import { useEffect, useState } from "react";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "../App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (count > 10) {
      setIsWinner(true);
    }
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Conditional Rendering)</h1>
      {isWinner && <h1>Congratulations!!</h1>}
      {isWinner ? <h1>Winner</h1> : <h1>Loser!</h1>}
      <div className="card">
        <button onClick={incrementCount}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
