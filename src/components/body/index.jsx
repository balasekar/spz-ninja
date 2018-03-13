import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/home/index';
import Solutions from '../../pages/solutions/index';
import Products from '../../pages/products/index';
import Clients from '../../pages/clients/index';
import ProductDetails from '../../pages/productDetails/index';
import ContactUs  from '../../pages/contactUs/index';


class Body extends Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/clients" component={Clients} />
                <Route exact path="/productDetails/:productId" component={ProductDetails} />
                <Route exact path="/contactUs" component={ContactUs} />
            </main>
        );
    }
}

export default Body;