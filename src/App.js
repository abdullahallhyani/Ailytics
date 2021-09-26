import React from "react";

import "./App.css";
import Login from "./Login/Login";

import NavBarCombonent from "./Navbar/NavBarCombonent";
import Header from "./Header/Header";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }
function App() {
  // const token = getToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    
    <div>
      <Header />    
      <NavBarCombonent />
    </div>
  );
}

export default App;
