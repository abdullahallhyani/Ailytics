import React, { useState } from "react";

import "./App.css";
import Login from "./Login/Login";

import NavBarCombonent from "./Navbar/NavBarCombonent";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <NavBarCombonent />
    </div>
  );
}

export default App;
