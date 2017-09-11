import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../containers/home/index';
import About from '../../containers/about/index';

import './body.css';

class Body extends Component {
    render() {
        return (
            <main className="">
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={About} />
            </main>
        );
    }
}

export default Body;