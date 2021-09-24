import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./NavBarStyle.css";
import Login from "../Login/Login";
import Dashbord from "../Dashbord/Dashbord";
import CCTV from "../CCTV/CCTV";
import lan_view from "../lan_view/lan_view";
import alart from "../alart/alart";
import chart from "../chart/chart";


export default class NavBarCombonent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar
            bg="dark"
            variant="dark"
            expand="sm"
            style={{
              maxHeight: "100%",
              width: "15%",
              position: "fixed",
              height: "100%.",
              overflow: "auto",
            }}
          >
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="flex-column "
                fill
                variant="tabs"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/Dashbord">
                Dashbord{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/CCTV">
                  CCTV{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/lan_view">
                  Plan View{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/alart">
                  Alart{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/chart">
                  Chart{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
            <Route path="/Dashbord">
                <Dashbord></Dashbord>
            </Route>
            <Route path="/CCTV">
                <CCTV></CCTV>
            </Route>
            <Route path="/lan_view">
                <lan_view></lan_view>
            </Route>
            <Route path="/alart">
                <alart></alart>
            </Route>
            <Route path="/chart">
                <chart></chart>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
        </div>
      </Router>
    );
  }
}
