import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main" color="danger">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              Tap It DFW
            </NavbarBrand>

            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/social/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings/">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register-page/">login</NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="/login-page/"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Login
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="/register-page/"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Create A Profile
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
