import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


import {
    ShareButtons,
    generateShareIcon
} from 'react-share';

import ISO from './images/i1.png';
import IAF from './images/i2.png';
import ANZ from './images/i3.png';
import CE from './images/i5.png';

import "./footer.css";

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');


class Footer extends Component {

    render() {

        return (
            <Grid>
                <footer className="navbar-fixed-bottom">
                    <Row className="footer">
                        <Col xs={8} md={8}>
                                <img src={ISO} alt="ISO" style={{width:43,height:79}}/>
                                <img src={IAF} alt="IAF" style={{width:73,height:76}}/>
                                <img src={ANZ} alt="ANX" style={{width:39,height:76}}/>
                                <img src={CE} alt="CE" style={{width:68,height:76}}/>
                        </Col>
                        <Col xs={4} md={4}>
                            <div className="footer__some-network">
                            <FacebookShareButton
                                url="https://www.facebook.com/spowerzsolutions/"
                                quote="SPZ"
                                className="footer__some-network__share-button">
                                <FacebookIcon
                                    size={32}
                                    round />
                            </FacebookShareButton>
                            </div>
                            <div className="footer__some-network">
                                <GooglePlusShareButton
                                    url="https://plus.google.com/103781860989673715697"
                                    quote="SPZ"
                                    className="footer__some-network__share-button">
                                    <GooglePlusIcon
                                        size={32}
                                        round />
                                </GooglePlusShareButton>
                            </div>
                            <div className="footer__some-network">
                                <LinkedinShareButton
                                    url="https://plus.google.com/103781860989673715697"
                                    quote="SPZ"
                                    className="footer__some-network__share-button">
                                    <LinkedinIcon
                                        size={32}
                                        round />
                                </LinkedinShareButton>
                            </div>
                        </Col>
                    </Row>
                </footer>
            </Grid>
        );
    }
}

export default Footer;