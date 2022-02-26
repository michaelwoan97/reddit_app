/*
    NAME        : Header.js
    PROJECT     : Frontend programming assignment
    PROGRAMMER  : Nghia Nguyen
    DATE        : February 20, 2021
    DESCRIPTION : This file contain the header component of the project
*/

import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../logo.svg';
const header = () => {
    return (
        <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
                <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="Favorites">
                <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
            <LinkContainer to="About">
                <Nav.Link>About Project</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
}

export default header