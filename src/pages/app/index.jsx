import React, { Component } from 'react';

import Header from '../../components/header/index'
import Body from '../../components/body/index'
import Footer from '../../components/footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;