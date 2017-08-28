import React from 'react';
import {Navbar, NavItem} from 'react-materialize'


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar brand='SPowerZ' right>
                    <NavItem href="/page1"> Solutions </NavItem>
                    <NavItem href="/page1"> Products </NavItem>
                    <NavItem href="/page2"> Clients </NavItem>
                </Navbar>
            </div>
        )
    }
}