import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/home/index';
import Solutions from '../../pages/solutions/index';
import Products from '../../pages/products/index';
import Clients from '../../pages/clients/index';

class Body extends Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/clients" component={Clients} />
            </main>
        );
    }
}

export default Body;