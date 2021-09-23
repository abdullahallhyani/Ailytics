import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
import Login from "../Login/Login";

export default class NavBarCombonent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            {/* <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/CCTV">
                  CCTV
                </Nav.Link>
                <Nav.Link as={Link} to="/plan_view">
                  plan view{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/alart1">
                  alart1
                </Nav.Link>
                <Nav.Link as={Link} to="/chart">
                  chart
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  login{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Route path="/login">
            <Login></Login>
          </Route>
        </div>
      </Router>
    );
  }
}
