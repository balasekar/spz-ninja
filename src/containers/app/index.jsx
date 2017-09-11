import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../../components/header/index'
import Body from '../../components/body/index'
import Footer from '../../components/footer';

const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider  muiTheme={muiTheme}>
            <div className="App">
                <Header/>
                <Body/>
                <Footer/>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;