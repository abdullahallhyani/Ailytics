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
import { Navbar, NavDropdown } from "react-bootstrap";

function NavBarCombonent() {
  return (
    <Router>
      <div>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="side">
              <NavLink to="/Dashbord" className="NavLink">
                Dashbord
              </NavLink>
              <NavDropdown
                className="NavLink "
                as={Link}
                to="/CCTV"
                variant="success"
                title="CCTV"
                style={{ color: "rgb(243, 243, 243", textDecoration: "none" }}
              >
                <NavDropdown.Item href="#action/3.1">CCTV 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">CCTV 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">CCTV 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">CCTV 4</NavDropdown.Item>
              </NavDropdown>

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
          </Navbar.Collapse>
        </Navbar>
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
