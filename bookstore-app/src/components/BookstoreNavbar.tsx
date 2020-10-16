import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
    Link
  } from "react-router-dom";

function BookstoreNavbar() {
    return (
        <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Bookstore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  as={Link} to="/">
          Books
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
          Create
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
}

export default BookstoreNavbar;