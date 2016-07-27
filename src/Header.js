import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">MrRacoon</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#/home">Home</NavItem>
            <NavItem eventKey={2} href="#/blog">Blog</NavItem>
            <NavItem eventKey={3} href="#/about">About Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
