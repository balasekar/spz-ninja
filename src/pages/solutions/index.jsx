import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

import EMSImg from './images/EMS.jpg';
import AMRImg from './images/AMR.jpg';
import SSLImg from './images/SSL.jpg';
import "./solutions.css";

const EMSTitle = (
    <h2>Energy Monitoring Solution</h2>
);
const AMRTitle = (
    <h2>Automatic Meter Reading Solution</h2>
);
const SSLTitle = (
    <h2>Smart Street Light Solution</h2>
);



class About extends Component {
    render() {
        return (
                <Grid>
                    <Row>
                        <Panel className="solution_panel" header={EMSTitle} bsStyle="info">
                            <Col xs={12} md={6}>
                                <img className="solution_image" src={EMSImg} alt="Energy Monitoring Solution"/>
                            </Col>
                            <Col xs={12} md={6}>
                                <p>
                                    SPZ is proud to introduce an energy management solution,through Power Line Communication.
                                    The system offers Energy consumption details (EB and DG separately) of a building,
                                    floor-wise or tenant-wise based on the topography of building.Applicable for
                                </p>
                                <ul>
                                    <li> HT Consumers </li>
                                    <li> LT Consumers </li>
                                    <li> Commercial Buildings </li>
                                    <li> Hotels </li>
                                    <li> Industries </li>
                                </ul>
                                <Button className="solution_button" bsSize="small" bsStyle="info">Ask for quote >></Button>
                            </Col>
                        </Panel>
                    </Row>
                    <Row>
                        <Panel className="solution_panel" header={AMRTitle} bsStyle="info">
                            <Col xs={12} md={6}>
                                <p>
                                    SPZ is proud to introduce an energy management solution, through Power Line Communication.
                                    The system offers Energy consumption details (EB and DG separately) of a building,
                                    floor-wise or tenant-wise based on the topography of building.
                                </p>
                                <ul>
                                    <li> HT Consumers </li>
                                    <li> LT Consumers </li>
                                    <li> Commercial Buildings </li>
                                    <li> Hotels </li>
                                    <li> Industries </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={6}>
                                <img className="solution_image" src={AMRImg} alt="Automation Meter Reading"/>
                                <Button className="solution_button" bsSize="small" bsStyle="info">Ask for quote >></Button>
                            </Col>
                        </Panel>
                    </Row>
                    <Row>
                        <Panel className="solution_panel" header={SSLTitle} bsStyle="info">
                            <Col xs={12} md={6}>
                                <img className="solution_image" src={SSLImg} alt="Smart Street Light Solution"/>
                            </Col>
                            <Col xs={12} md={6}>
                                <p>
                                    SPZ is proud to introduce an energy management solution,through Power Line Communication.
                                    The system offers Energy consumption details (EB and DG separately) of a building,
                                    floor-wise or tenant-wise based on the topography of building.Applicable for
                                </p>
                                <ul>
                                    <li> HT Consumers </li>
                                    <li> LT Consumers </li>
                                    <li> Commercial Buildings </li>
                                    <li> Hotels </li>
                                    <li> Industries </li>
                                </ul>
                                <Button className="solution_button" bsSize="small" bsStyle="info">Ask for quote >></Button>
                            </Col>
                        </Panel>
                    </Row>
                </Grid>
        );
    }
}

export default About;