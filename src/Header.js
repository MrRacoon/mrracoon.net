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
            <NavItem eventKey={1} active={this.props.currentPath === '/home'} href="#/home">Home</NavItem>
            <NavItem eventKey={2} active={this.props.currentPath === '/projects'} href="#/projects">Projects</NavItem>
            <NavItem eventKey={3} active={this.props.currentPath === '/blog'} href="#/blog">Blog</NavItem>
            <NavItem eventKey={4} active={this.props.currentPath === '/about'} href="#/about">About Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
