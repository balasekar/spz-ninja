import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import SolutionPanel from '../../components/solution/index';
import "./solutions.css";

class About extends Component {
    render() {
        return (
                <Grid className="app_container">
                    <Row>
                        <SolutionPanel
                            image = "EMS"
                            title = "Energy Monitoring Solution"
                            desc="SPZ is proud to introduce an energy management solution,through Power Line Communication.
                                The system offers Energy consumption details (EB and DG separately) of a building,
                                floor-wise or tenant-wise based on the topography of building.Applicable for"
                            implementations={["HT Consumers", "LT Consumers", "Commercial Buildings","Hotels","Industries"]}
                        />
                    </Row>
                    <Row>
                        <SolutionPanel
                            image = "AMR"
                            title = "Automatic Meter Reading Solution"
                            desc="SPZ is proud to introduce an energy management solution,through Power Line Communication.
                                The system offers Energy consumption details (EB and DG separately) of a building,
                                floor-wise or tenant-wise based on the topography of building.Applicable for"
                            implementations={["HT Consumers", "LT Consumers", "Commercial Buildings","Hotels","Industries"]}
                        />
                    </Row>
                    <Row>
                        <SolutionPanel
                            image = "SSL"
                            title = "Smart Street Light Solution"
                            desc="SPZ is proud to introduce an energy management solution,through Power Line Communication.
                                The system offers Energy consumption details (EB and DG separately) of a building,
                                floor-wise or tenant-wise based on the topography of building.Applicable for"
                            implementations={["HT Consumers", "LT Consumers", "Commercial Buildings","Hotels","Industries"]}
                        />
                    </Row>
                </Grid>
        );
    }
}

export default About;