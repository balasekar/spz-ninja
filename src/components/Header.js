import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
/*    burgerToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }*/

    render() {
        return (
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="/">SPowerz</a>
                        <a href="/">Solutions</a>
                        <a href="/">Products</a>
                        <a href="/">Clients</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                    <div className="narrowLinks">
                        <a href="/" onClick={this.burgerToggle}>SPowerz</a>
                        <a href="/" onClick={this.burgerToggle}>Solutions</a>
                        <a href="/" onClick={this.burgerToggle}>Products</a>
                        <a href="/" onClick={this.burgerToggle}>Clients</a>
                    </div>
                </div>
            </nav>
        )
    }
}