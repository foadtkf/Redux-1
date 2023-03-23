import React, { useContext, useState } from "react";
import { Daddycontext } from "../App";

const Child = () => {
  const { setVal } = useContext(Daddycontext);
  //   const [val, setVal] = useState(0);
  return (
    <div className="App">
      {/* <h3>{val}</h3> */}
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
};

export default Child;
