import React from "react";

import "./App.css";
import Login from "./Login/Login";
// import * as serviceWorker from "./serviceWorker";
import NavBarCombonent from "./Navbar/NavBarCombonent";
import Header from "./Header/Header";

<<<<<<< HEAD
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
=======
function App() {
>>>>>>> 6b05670f998ec21c38e4d3bc4d957a53995e936e
  return (
    
    <div>
      <Header />    
      <NavBarCombonent />
    </div>
  );
}

export default App;
