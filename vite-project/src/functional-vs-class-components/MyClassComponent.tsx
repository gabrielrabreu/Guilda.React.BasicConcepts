import { Component } from "react";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "../App.css";

interface AppProps {}

class App extends Component<AppProps, { count: number }> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React (Class Component)</h1>
        <div className="card">
          <button onClick={this.incrementCount}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.js</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
