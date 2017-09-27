import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';

import Logo from '../../images/logo/logo.png';
import './header.css';

const navbarInstance = (
    <Navbar collapseOnSelect fixedTop={true}>
        <Navbar.Header>
            <Navbar.Brand>
                <IndexLinkContainer to="/">
                    <a href="/">
                        <img className="App-logo" alt={"SPZ"} src={Logo}/>
                        <span className="App-title">SPowerz</span>
                    </a>
                </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight className="Nav-button">
                <IndexLinkContainer to="/solutions">
                    <NavItem eventKey={1} href="/solutions">Solutions</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/products">
                    <NavItem eventKey={2} href="/products">Products</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/clients">
                    <NavItem eventKey={3} href="/clients">Clients</NavItem>
                </IndexLinkContainer>
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