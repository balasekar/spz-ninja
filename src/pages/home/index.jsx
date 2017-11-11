import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import imageSrc from '../../images/default.jpg';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <img className='imgBG' alt='BG_IMG' src={imageSrc}/>
                            <div className='homeText'>
                                <h1>Building Power Automation</h1>
                                <p className='homeContent'>SPowerz provides customers with a safe, comfortable, healthy,
                                    energy-saving, proactive and sustainable power monitoring</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <img className='imgBG' alt='BG_IMG' src={imageSrc}/>
                            <div className='homeText'>
                                <h1>Building Power Automation</h1>
                                <p className='homeContent'>SPowerz provides customers with a safe, comfortable, healthy,
                                    energy-saving, proactive and sustainable power monitoring</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;