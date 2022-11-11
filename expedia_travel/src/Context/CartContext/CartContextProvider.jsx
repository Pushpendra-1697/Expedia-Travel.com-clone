import React from "react";
import { createContext, useReducer } from "react";
import reducer from "./reducer"
export const CardContext = createContext();
const initState = [];
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
export default CartContextProvider;
