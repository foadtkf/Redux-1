import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [val, setVal] = useState(0);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>{val}</h3>
      <div style={{ display: "flex", justifyContent: "center", columnGap: 20 }}>
        <button onClick={() => setVal((prvState) => prvState + 1)}>
          increment
        </button>
        <button onClick={() => setVal((prvState) => prvState - 1)}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
