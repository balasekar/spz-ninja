import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <h1>Building Automation</h1>
                        <p>SPowerz provides customers with a safe, comfortable, healthy, energy-saving, proactive and sustainable power monitoring</p>
                        <p><Button bsStyle='primary' bsSize='large' href={"/solutions"}>Learn more »</Button></p>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;