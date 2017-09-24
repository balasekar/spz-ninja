import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';

import Client from '../../components/client/index';

import BSNLImg from './images/BSNL.png';
import COLImg from './images/COL.png';
import DLFImg from './images/DLF.png';
import KALImg from './images/kalpakkam.png';
import SIDCOImg from './images/SIDCO.png';
import TATAImg from './images/TATA.png';

import './clients.css';

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                    <Row>
                        <Client image={BSNLImg} title="BSNL"/>
                        <Client image={COLImg} title="COLUMBIA"/>
                        <Client image={DLFImg} title="DLF"/>
                        <Client image={KALImg} title="Kalpakkam"/>
                        <Client image={SIDCOImg} title="SIDCO"/>
                        <Client image={TATAImg} title="TATA"/>
                    </Row>
            </Grid>
        );
    }
}

export default About;