import React, { useEffect, useReducer } from "react";
import Navigation from "./Navigation";
import { createContext } from "react";
import "./App.css";
// import { initial } from "lodash";

const initialState = {
  auth: true,
  token: null,
};

export const UserContext = createContext();

function App() {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "authentication":
        return {
          ...prevState,
          auth: action.auth,
          token: action.token,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    if (state.token === null) {
      const token = localStorage.getItem("token");
      dispatch({ type: "authentication", auth: false, token: token });
    } else {
      dispatch({ type: "authentication", auth: true });
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navigation />
      </UserContext.Provider>
    </div>
  );
}

export default App;
