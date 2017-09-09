import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../../components/header'
import Home from '../home'
import About from '../about'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <Header/>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                </main>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;