import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { ShareButtons, generateShareIcon } from 'react-share';

import "./footer.css";

const certificates = ['i1', 'i2', 'i3', 'i5'];
const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');


class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="footer">
                    <Grid>
                        <Row>
                            <Col xs={6} md={6}>
                                {
                                    certificates.map(item => (
                                        <img src={require('../../images/certificates/'+item+'.png')} alt={item} className="footer__certificates" />
                                    ))
                                }
                            </Col>
                            <Col xs={2} md={2}>
                            </Col>
                            <Col xs={4} md={4}>
                              <div className="footer__network">
                                    <FacebookShareButton
                                        url="https://www.facebook.com/spowerzsolutions/"
                                        quote="SPZ"
                                        className="footer__network__share-button">
                                        <FacebookIcon
                                            size={25}
                                            round/>
                                    </FacebookShareButton>
                                </div>
                                <div className="footer__network">
                                    <GooglePlusShareButton
                                        url="https://plus.google.com/103781860989673715697"
                                        quote="SPZ"
                                        className="footer__network__share-button">
                                        <GooglePlusIcon
                                            size={25}
                                            round/>
                                    </GooglePlusShareButton>
                                </div>
                                <div className="footer__network">
                                    <LinkedinShareButton
                                        url="https://plus.google.com/103781860989673715697"
                                        quote="SPZ"
                                        className="footer__network__share-button">
                                        <LinkedinIcon
                                            size={25}
                                            round/>
                                    </LinkedinShareButton>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </footer>
        );
    }
}

export default Footer;