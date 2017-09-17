import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Panel from 'react-bootstrap/lib/Panel';

import DCImg from './images/DC.jpg';
import MFMImg from './images/MFM.jpg';
import DCEMImg from './images/DCEM.jpg';
import PMImg from './images/PM.jpg';
import UMImg from './images/UM.jpg';
import SMImg from './images/SM.jpg';

import './products.css';

const ProductsTitle = (
    <h2>PRODUCTS</h2>
);

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                <Panel className="product_panel" header={ProductsTitle} bsStyle="info">
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={DCImg} alt="Demand Controller">
                                <div className="product_div__heading">Demand Controller</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={MFMImg} alt="Multifunctional Meters">
                                <div className="product_div__heading">Multi Meters</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={DCEMImg} alt="DC Energy Meter">
                                <div className="product_div__heading">DCEnergy Meter</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={SMImg} alt="Solar Energy Meter">
                                <div className="product_div__heading">Solar Meter</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={PMImg} alt="Panel Meters">
                                <div className="product_div__heading">Panel Meters</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={UMImg} alt="Utility Meters">
                                <div className="product_div__heading">Utility Meters</div>
                            </Thumbnail>
                        </div>
                    </Col>
                </Panel>
            </Grid>
        );
    }
}

export default About;