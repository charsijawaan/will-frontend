import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = ({ user }) => {
  return (
    <div>
      {/* <div className="topBar" style={{ backgroundColor: "#1f6f8b" }}>
        <p>.</p>
      </div> */}
      <Navbar collapseOnSelect expand="lg" id="header">
        <Navbar.Brand style={{ color: "orange" }} href="/home">
          <img
            style={{ height: "auto",width:"180px" }}
            src="data:image/png;base64,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"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="">ABOUT US</Nav.Link>
            <Nav.Link href="">CONTACT</Nav.Link>
            {!user && (
              <React.Fragment>
                <Nav.Link href="/login">LOGIN</Nav.Link>
                <Nav.Link href="/register/indivdualUser">
                  Individual User
                </Nav.Link>
                <Nav.Link href="/register/b2b">B2B Client</Nav.Link>
                <Nav.Link href="/register/will-ambassador">
                  Will Ambassador
                </Nav.Link>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <Nav.Link href="/home">{user.name}</Nav.Link>
                <Nav.Link href="/logout">LOGOUT</Nav.Link>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
