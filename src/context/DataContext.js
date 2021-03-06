import React, { createContext, useMemo, useReducer, useState } from "react";
import setAxiosHeader from "../services/setToken";

export const DataContext = createContext();

const initialState = {
  data: {},
  type: "artists",
  token_expired: false
};
const reducer = (state, action) => {
  switch (action.type) {
    case "DATA":
      return {
        ...state,
        data: action.payload
      };
    case "TYPE":
      return {
        ...state,
        type: action.payload
      };
    case "ERROR":
      return {
        ...state,
        token_expired: action.payload
      };
    default:
      return state;
  }
};

export function DataProvider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [token, setToken] = useState(() => {
    const t = window.localStorage.getItem("t") || "";
    t && setAxiosHeader(t);
    return t;
  });
  const value = useMemo(() => {
    return {
      store,
      dispatch,
      token,
      setToken
    };
  }, [store, token]);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
