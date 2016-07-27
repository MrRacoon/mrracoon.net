import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <Navbar.Header>
          <Navbar.Brand>
            Created by: Erik Sutherland
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight bsStyle='pills'>
            <NavItem href="https://github.com/MrRacoon">
              <FontAwesome name="github" size="2x"/>
            </NavItem>
            <NavItem>
              <FontAwesome name="facebook" size="2x"/>
            </NavItem>
            <NavItem href="https://www.linkedin.com/in/erik-sutherland-8b873a90">
              <FontAwesome name="linkedin" size="2x"/>
            </NavItem>
            <NavItem href="mailto:esutherland@live.com">
              <FontAwesome name="envelope" size="2x"/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
