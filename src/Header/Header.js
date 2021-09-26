import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./Header.css";

import Chart from "../chart/Chart";
import Login from "../Login/Login";
import { Navbar, NavDropdown } from "react-bootstrap";
import { IconName } from "react-icons/bi";
import userEvent from "@testing-library/user-event";

function Header() {
  return (
 <div> 
     
    <div className="hedearContenar">
    {/* <BiLogIn> */}
        <Router>
        <Link className="link feather icon-log-in" to="/login">Login</Link>
        
        <Link  className="link feather icon-log-out " to="/login">Logout</Link>
        
        
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch> 
        </Router>


    </div>
 

</div>
  )
}

export default Header;

// componentDidMount() {
//     const rememberMe = localStorage.getItem('rememberMe') === 'true';
//     const user = rememberMe ? localStorage.getItem('user') : '';
//     const password  = rememberMe ? localStorage.getItem('password') : '';
//     this.setState({ user,password, rememberMe });
// };

// user.useremil