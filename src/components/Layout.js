import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';

import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
        )
    }
}

export default Layout;
