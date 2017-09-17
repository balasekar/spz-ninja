import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Panel from 'react-bootstrap/lib/Panel';

import BSNLImg from './images/BSNL.png';
import COLImg from './images/COL.png';
import DLFImg from './images/DLF.png';
import KALImg from './images/kalpakkam.png';
import SIDCOImg from './images/SIDCO.png';
import TATAImg from './images/TATA.png';

import './clients.css';

const ProductsTitle = (
    <h2>PRODUCTS</h2>
);

class About extends Component {
    render() {
        return (
            <Grid className="app_container">
                <Panel className="product_panel" header={ProductsTitle} bsStyle="info">
                    <Row>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={BSNLImg} alt="BSNL">
                                <div className="product_div__heading">BSNL</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={COLImg} alt="COLUMBIA">
                                <div className="product_div__heading">COLUMBIA</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={DLFImg} alt="DLF">
                                <div className="product_div__heading">DLF</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={KALImg} alt="KALPAKKAM">
                                <div className="product_div__heading">KALPAKKAM</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={SIDCOImg} alt="SIDCO">
                                <div className="product_div__heading">SIDCO</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="product_div">
                            <Thumbnail src={TATAImg} alt="TATA">
                                <div className="product_div__heading">TATA</div>
                            </Thumbnail>
                        </div>
                    </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

export default About;