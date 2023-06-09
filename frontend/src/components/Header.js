import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navStyle = {
  backgroundColor: 'darkblue'
};

const Header = ({title}) => {
  return (
    <Navbar style={navStyle} variant="dark">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
