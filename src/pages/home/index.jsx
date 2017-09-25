import React, { Component } from 'react';
import imageSrc from '../../images/default.jpg';
import './home.css';

class Home extends Component {
    render() {
            let textStyle = {
                position: 'absolute',
                top: '50%',
                left: '5%'
            };

            return (
                <div style={{width: 'auto'}}>
                    <img className="imgBG" alt="BG_IMG" src={imageSrc}>
                    </img>
                    <div style={textStyle}>
                    <h1>Building Power Automation</h1>
                    <p className="homeContent">SPowerz provides customers with a safe, comfortable, healthy, energy-saving, proactive and sustainable power monitoring</p>
                    </div>
                </div>
            );
    }
}

export default Home;