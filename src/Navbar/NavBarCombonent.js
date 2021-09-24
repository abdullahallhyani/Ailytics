import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./NavBarStyle.css";
import Login from "../Login/Login";
import Dashbord from "../Dashbord/Dashbord";
import CCTV from "../CCTV/Cctv";
import lan_view from "../lan_view/LanView";
import alart from "../alart/Alart";
import chart from "../chart/Chart";
import LanView from "../lan_view/LanView";
import Alart from "../alart/Alart";
import Chart from "../chart/Chart";

export default class NavBarCombonent extends Component {
  render() {
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
          <Route path="/Dashbord">
            <Dashbord></Dashbord>
          </Route>
          <Route path="/CCTV">
            <CCTV></CCTV>
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
            <Login></Login>
          </Route>
        </div>
      </Router>
    );
  }
}
