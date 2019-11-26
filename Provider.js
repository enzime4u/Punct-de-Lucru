import React, { useReducer } from "react";
import reducer from "./reducer.js";
import initialState from "./state.js";

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

export default function Provider(attrs) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Dispatch.Provider value={dispatch}>
      <State.Provider value={state}>{attrs.children}</State.Provider>
    </Dispatch.Provider>
  );
}
