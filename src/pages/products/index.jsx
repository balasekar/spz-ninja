import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

import DCImg from './images/DC.jpg';
import MFMImg from './images/MFM.jpg';
import DCEMImg from './images/DCEM.jpg';
import PMImg from './images/PM.jpg';
import UMImg from './images/UM.jpg';

import './products.css';

const ProductsTitle = (
    <h2>PRODUCTS</h2>
);

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                <Row className="solution_row" >
                    <Panel className="product_panel" header={ProductsTitle} bsStyle="info">
                        <Col xs={6} md={4}>
                            <div className="product_div">
                                <Thumbnail src={DCImg} alt="Demand Controller">
                                    <h4>Demand Controller</h4>
                                    <p>This is a demand controller.
                                        <Button className="product_button" bsStyle="info">Ask for price</Button>
                                    </p>
                                </Thumbnail>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src={MFMImg} alt="Multifunctional Meters">
                                <h4>Multifunctional Meters</h4>
                                <p>This is a multi functional meter
                                    <Button  className="product_button" bsStyle="info">Ask for price</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src={DCEMImg} alt="DC Energy Meter">
                                <h4>DC Energy Meter</h4>
                                <p>This is a DC Energy Meter
                                    <Button  className="product_button" bsStyle="info">Ask for price</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src={PMImg} alt="Panel Meters">
                                <h4>Panel Meters</h4>
                                <p>These are Panel Meters
                                    <Button  className="product_button" bsStyle="info">Ask for price</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src={UMImg} alt="Utility Meters">
                                <h4>Utility Meters</h4>
                                <p>This is a utility meter
                                    <Button  className="product_button" bsStyle="info">Ask for price</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    </Panel>
                </Row>
            </Grid>
        );
    }
}

export default About;