import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import './header.css';

function handleClick(e) {
    if (this.props.disabled) {
        e.preventDefault();
    } else {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.eventKey, e);
        }
    }
}

const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">SPowerz</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} onClick={handleClick} href="/about-us">Solutions</NavItem>
                <NavItem eventKey={2} onClick={handleClick} href="/">Products</NavItem>
                <NavItem eventKey={3} onClick={handleClick} href="/">Clients</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

class Header extends Component {
    render() {
        return navbarInstance;
    }
}

export default Header;