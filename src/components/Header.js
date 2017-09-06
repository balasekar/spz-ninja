import React from 'react';
import styles from './Header.scss';

export default class Header extends React.Component {
    burgerToggle = () => {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    };

    render() {
        return (
            <nav>
                <div className={styles.navWide}>
                    <div className={styles.wideDiv}>
                        <a href="/">SPowerz</a>
                        <a href="/">Solutions</a>
                        <a href="/">Products</a>
                        <a href="/">Clients</a>
                    </div>
                </div>
                <div className={styles.navNarrow}>
                    {/*let iclass = classNames({
                    'styles.fa': true,
                    'styles.fa-bars': true,
                    'styles.fa-2x': true
                });*/}
                    <i className={styles.fa} onClick={this.burgerToggle}></i>
                    <div className={styles.narrowLinks}>
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