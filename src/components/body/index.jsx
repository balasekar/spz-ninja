import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../containers/home/index';
import Solutions from '../../containers/solutions/index';
import Products from '../../containers/products/index';
import Clients from '../../containers/clients/index';



import './body.css';

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