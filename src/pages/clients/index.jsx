import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';

import Client from '../../components/client/index';

import './clients.css';

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                <Panel className="client_panel" header={<h2>CLIENTS</h2>} bsStyle="info">
                    <Row>
                        <Client image="BSNL" title="BSNL"/>
                        <Client image="BSNL" title="BSNL"/>
                        <Client image="BSNL" title="BSNL"/>
                        <Client image="BSNL" title="BSNL"/>
                        <Client image="BSNL" title="BSNL"/>
                        <Client image="BSNL" title="BSNL"/>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

export default About;