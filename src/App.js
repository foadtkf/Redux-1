import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Child from "./Pages/Child";
import ManyStates from "./Pages/ManyStates";
import ExploreMore from "./Pages/ExploreMore";
export const Daddycontext = createContext();
function App() {
  const [val, setVal] = useState(0);
  const value = { val, setVal };
  return (
    <Daddycontext.Provider value={value}>
      <div className="App">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        {/* <div>
        <h3>Value: {val}</h3>
        <Child /></div> */}
        {/* <div>
          <ManyStates />
        </div> */}
        <div>
          <ExploreMore />
        </div>
      </div>
    </Daddycontext.Provider>
  );
}

export default App;
