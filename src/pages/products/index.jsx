import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';

import Product from '../../components/product/index';

import DCImg from './images/DC.jpg';
import MFMImg from './images/MFM.jpg';
import DCEMImg from './images/DCEM.jpg';
import PMImg from './images/PM.jpg';
import UMImg from './images/UM.jpg';
import SMImg from './images/SM.jpg';

import './products.css';

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                <Panel className="product_panel" header={<h2>PRODUCTS</h2>} bsStyle="info">
                    <Row>
                        <Product image={DCImg} title="Demand Controller"/>
                        <Product image={MFMImg} title="Multi Meters"/>
                        <Product image={DCEMImg} title="DCEnergy Meter"/>
                        <Product image={PMImg} title="Panel Meters"/>
                        <Product image={UMImg} title="Utility Meters"/>
                        <Product image={SMImg} title="Solar Meters"/>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

export default About;