import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import autobind from 'class-autobind';
import _ from 'lodash';
import {Grid, Row, Col, Button, Tab, Tabs, Table, Modal} from 'react-bootstrap';

import {fetchProducts, askUserDetails, closeUserDetails, saveUserDetails} from '../../actionCreators';

import './productDetails.css';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_overlay: props.show_overlay,
            user: {},
            productId: ''
        };
        autobind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts())
    }

    componentWillReceiveProps(nextProps) {
        console.log('What the props:', nextProps.match.params.productId);
        this.setState({productId: nextProps.match.params.productId});
    }

    askForQuote = () => {
        this.setState({show_overlay: this.state.productId});
        this.props.dispatch(askUserDetails(this.state.productId));
    };

    submit = () => {
        this.props.dispatch(saveUserDetails(this.state.user, this.state.show_overlay));
    };

    close = () => {
        this.setState({show_overlay: null});
        this.props.dispatch(closeUserDetails());
    };

    handleUserNameChange(event){
        let user = this.state.user;
        user.name = event.target.value;
        this.setState({user: user});
    }

    handleUserMailIdChange(event){
        let user = this.state.user;
        user.email = event.target.value;
        this.setState({user: user});
    }

    handleUserMobileNoChange(event){
        let user = this.state.user;
        user.mobile = event.target.value;
        this.setState({user: user});
    }

    render() {
        return (
            <div className="productDetail">
                <Grid>
                    <div className="productDetail__desc">
                        <Row>
                            <h1>Two Channel DC Energy Meter (SPDC201)</h1>
                        </Row>
                        <div className="productDetail__desc-item">
                            <Row>
                                <Col xs={12} md={8}>
                                    <p>
                                        Advanced technology of KLV capacitors is based on construction of all-film
                                        capacitor
                                        sections,
                                        folding foil edge design, improved electrical and mechanical connections between
                                        sections
                                        and
                                        impregnation with environmentally compatible insulating oil. KLV capacitors have
                                        very
                                        low dielectric losses and are designed for long service life.
                                    </p>
                                    <Button bsSize="small" bsStyle="info" onClick={this.askForQuote}>Product Request</Button><br/>
                                    <img src={require('@images/productDetails/industry.png')} style={{width: '100px'}}
                                         alt={'Industry'}/>
                                    <img src={require('@images/productDetails/feeder.png')}
                                         style={{margin: '10px 20px', width: '100px'}} alt={'feeder'}/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <img src={require('@images/products/DC.jpg')} alt={'Meter'}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="productDetail__features">
                        <Row>
                            <Col xs={12} md={12}>
                                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                    <Tab eventKey={1} title="Benefits">
                                        <div className="productDetail__features-benefits">
                                            <p>
                                                Transfering settings between different devices has never been easier
                                                thanks
                                                to special front panel USB port.
                                                Same settings are simply transferred from one device to another using
                                                USB
                                                stick which can also be used to save fault recordings,
                                                counters and software updates.
                                            </p>
                                            <img src={require('@images/products/DC.jpg')} alt={'Meter'}/>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="Configuration">
                                        <div className="productDetail__features-configuration">
                                            <p>
                                                <h4>Fully configured device includes:</h4>
                                                <ul>
                                                    <li>10 Digital inputs</li>
                                                    <li>8 Digital outputs</li>
                                                    <li>3 Analog outputs</li>
                                                    <li>Communication port</li>
                                                    <li>Port of External modules</li>
                                                    <li>USB front port</li>
                                                    <li>3 CT + 1CTs (1A/5A) or 4VT (150/300V) measuring inputs</li>
                                                </ul>
                                            </p>
                                            <img src={require('@images/connectionDiagram/CDLT.jpg')} alt={'CDLT'}/>
                                            <img src={require('@images/connectionDiagram/CDHT.jpg')} alt={'CDHT'}/>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={3} title="Technical Data">
                                        <div className="productDetail__features-tech">
                                            <Table responsive>
                                                <tbody>
                                                <tr>
                                                    <th>Accuracy</th>
                                                    <td>Class 0.5s</td>
                                                </tr>
                                                <tr>
                                                    <th>System type	</th>
                                                    <td>3 Phase 4 Wire</td>
                                                </tr>
                                                <tr>
                                                    <th>Resolution	</th>
                                                    <td>0.01 (for Combined Kwh, KVAh)</td>
                                                </tr>
                                                <tr>
                                                    <th>Display	</th>
                                                    <td>Multi Parameter LED (3 ROW)</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </div>
                    <div className="productDetail__support">
                        <div className="productDetail__support-contactbox">
                            <div className="productDetail__support-content">
                            <h3>Contact Sales</h3>
                            <a href="mailto:ssn@spowerz.com">E-mail</a>
                            </div>
                        </div>
                        <div className="productDetail__support-cataloguebox">
                            <div className="productDetail__support-content">
                                <h3>Catalogue</h3>
                                <a href="../../pdf" download="resume.pdf">Download Catalogue</a>
                            </div>
                        </div>
                        <div className="productDetail__support-downloadbox">
                            <div className="productDetail__support-content">
                                <h3>Download</h3>
                                <a href="../../pdf" download="resume.pdf"><h4>User Manual</h4></a>
                                <a href="../../pdf" download="resume.pdf"><h4>Presentation</h4></a>
                            </div>
                        </div>
                    </div>

                    <Modal show={!!this.state.show_overlay} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>User Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="userName">Name:</label>
                                    <input
                                        value={this.state.user.name}
                                        onChange={this.handleUserNameChange}
                                        type="text"
                                        className="form-control"
                                        id="userName" />
                                    <label htmlFor="email">Email Id:</label>
                                    <input
                                        value={this.state.user.email}
                                        onChange={this.handleUserMailIdChange}
                                        type="text"
                                        className="form-control"
                                        id="email" />
                                    <label htmlFor="mobile">Mobile Number:</label>
                                    <input
                                        value={this.state.user.mobile}
                                        onChange={this.handleUserMobileNoChange}
                                        type="text"
                                        className="form-control"
                                        id="mobile" />
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize="small" bsStyle="info" onClick={this.submit}>Submit Request</Button>
                            <Button bsSize="small" bsStyle="info" onClick={this.close}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>
            </div>
        );
    }
}

ProductDetail.propTypes = {
    products: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    dispatch: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {
    products: []
};

function mapStateToProps(state) {
    const products = state.siteData.get('products');
    const productDetails = _.filter(products, {id: 3});
    return {
        products: products || [],
        productDetails: productDetails
    };
}

export default connect(mapStateToProps)(ProductDetail);