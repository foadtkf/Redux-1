import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import ProductProvider from "./context/ProductProvider";
import Navbar from "./Components/Navbar";
// export const Daddycontext = createContext();
function App() {
  // const [val, setVal] = useState(0);
  // const value = { val, setVal };

  return (
    // <Daddycontext.Provider value={value}>
    // <ProductContext products={products}>
    <ProductProvider>
      <div className="App">
        <Navbar />
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </div>
    </ProductProvider>
    // </ProductContext>
    // </Daddycontext.Provider>
  );
}

export default App;
