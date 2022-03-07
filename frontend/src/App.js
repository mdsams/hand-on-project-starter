import React from "react";
import Navigation from "./Navigation";
import { useState, createContext } from "react";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [auth, setAuth] = useState(true);
  return (
    <UserContext.Provider value={[auth, setAuth]}>
      <div>
        <Navigation />
      </div>
    </UserContext.Provider>
  );
}

export default App;
