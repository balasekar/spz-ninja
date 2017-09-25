import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';

import Product from '../../components/product/index';

import './products.css';

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                <Panel className="product_panel" header={<h2>PRODUCTS</h2>} bsStyle="info">
                    <Row>
                        <Product image="DC" title="Demand Controller"/>
                        <Product image="MFM" title="Multi Meters"/>
                        <Product image="DCEM" title="DCEnergy Meter"/>
                        <Product image="PM" title="Panel Meters"/>
                        <Product image="UM" title="Utility Meters"/>
                        <Product image="SM" title="Solar Meters"/>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

export default About;