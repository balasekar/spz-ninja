import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/api/user')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to SPZ</h2>
                </div>
                <p className="App-intro">
                    {this.state.users.map(user =>
                        <div key={user.id}>{user.username}</div>
                    )}
                </p>
            </div>
        );
    }
}

export default App;
