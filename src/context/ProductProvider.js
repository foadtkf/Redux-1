import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { actionTypes } from "../states/ProductState/actiontypes";
import { initialState, reducer } from "../states/ProductState/reducer";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  //   const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_STARTED });
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCH_COMPLETED, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCH_ERROR });
      });
  }, []);
  const products = {
    state,
    dispatch,
  };
  return (
    <ProductContext.Provider value={products}>
      {children}{" "}
    </ProductContext.Provider>
  );
};

export const useProducsts = () => {
  const context = useContext(ProductContext);
  return context;
};
export default ProductProvider;
