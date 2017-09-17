import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';

import Logo from './logo/logo.png';
import './header.css';

function handleClick(e) {
/*    if (this.props.disabled) {
        e.preventDefault();
    } else {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.eventKey, e);
        }
    }*/
}

const navbarInstance = (
    <Navbar inverse collapseOnSelect fixedTop={"true"}>
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
                    <NavItem eventKey={1} onClick={handleClick} href="/solutions">Solutions</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/products">
                    <NavItem eventKey={2} onClick={handleClick} href="/products">Products</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/clients">
                    <NavItem eventKey={3} onClick={handleClick} href="/clients">Clients</NavItem>
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