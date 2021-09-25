import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./NavBarStyle.css";
import Dashbord from "../Dashbord/Dashbord";
import CCTV from "../CCTV/Cctv";
import LanView from "../lan_view/LanView";
import Alart from "../alart/Alart";
import Chart from "../chart/Chart";
import Login from "../Login/Login";

function NavBarCombonent() {
  return (
    <Router>
      <div>
        <div className="side">
          <NavLink to="/Dashbord" className="NavLink">
            Dashbord
          </NavLink>
          <NavLink className="NavLink" as={Link} to="/CCTV">
            CCTV{" "}
          </NavLink>
          <NavLink className="NavLink" as={Link} to="/lan_view">
            Plan View{" "}
          </NavLink>
          <NavLink className="NavLink" as={Link} to="/alart">
            Alart{" "}
          </NavLink>
          <NavLink className="NavLink" as={Link} to="/chart">
            Chart{" "}
          </NavLink>
          <NavLink className="NavLink" as={Link} to="/login">
            Login{" "}
          </NavLink>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/Dashbord">
            <Dashbord />
          </Route>
          <Route path="/CCTV">
            <CCTV />
          </Route>
          <Route path="/lan_view">
            <LanView />
          </Route>
          <Route path="/alart">
            <Alart />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBarCombonent;
