import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import autobind from 'class-autobind';
import _ from 'lodash';

import * as Material from 'react-icons/lib/md';
import * as FontAwesome from 'react-icons/lib/fa';
import * as GitIcons from 'react-icons/lib/go';
import {Grid, Row, Col, Button, Tab, Tabs, Table, Modal} from 'react-bootstrap';

import {fetchProducts, askUserDetails, closeUserDetails, saveUserDetails} from '../../actionCreators';
import './productDetails.css';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_overlay: null,
            user: {},
            productId: '',
            products: [],
            productDetails: null
        };
        autobind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts())
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            productId: nextProps.match.params.productId,
            products: nextProps.products,
            productDetails: _.filter(nextProps.products,
                    product => product.id.toString() === nextProps.match.params.productId.trim().toString())[0],
            show_overlay: nextProps.show_overlay
        });
    }

    askForQuote = (productTitle) => {
        this.setState({show_overlay: this.state.productDetails.title});
        this.props.dispatch(askUserDetails(productTitle));
    };

    submit = () => {
        this.props.dispatch(saveUserDetails(this.state.user, this.state.show_overlay));
    };

    close = () => {
        this.setState({show_overlay: null});
        this.props.dispatch(closeUserDetails());
    };

    handleUserNameChange(event) {
        let user = this.state.user;
        user.name = event.target.value;
        this.setState({user: user});
    }

    handleUserMailIdChange(event) {
        let user = this.state.user;
        user.mail_id = event.target.value;
        this.setState({user: user});
    }

    handleUserMobileNoChange(event) {
        let user = this.state.user;
        user.mobile_no = event.target.value;
        this.setState({user: user});
    }

    render() {
        const {productDetails} = this.state;
        return (
            <div className="productDetail">
                {productDetails &&
                <Grid fluid>
                    <div className="productDetail__desc">
                        <Row>
                            <h1>{productDetails.title}</h1>
                        </Row>
                        <div className="productDetail__desc-item">
                            <Row>
                                <Col xs={8} md={8}>
                                    <p>
                                        {productDetails.desc}
                                    </p>
                                    <Button bsSize="small" bsStyle="info" onClick={this.askForQuote.bind(this, productDetails.title)}>Product
                                        Request</Button><br/>
                                    <img src={require('@images/productDetails/industry.png')} style={{width: '6em'}}
                                         alt={'Industry'}/>
                                    <img src={require('@images/productDetails/transformer.png')}
                                         style={{margin: '1em 2em', width: '6em'}} alt={'feeder'}/>
                                </Col>
                                <Col xs={4} md={4}>
                                    <img src={require('../../images/products/' + productDetails.image.toString())}
                                         alt={productDetails.title}/>
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
                                                {productDetails.benefits}
                                            </p>
                                            <img
                                                src={require('../../images/products/' + productDetails.benefits_img.toString())}
                                                alt={productDetails.title}/>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="Configuration">
                                        <div className="productDetail__features-configuration">
                                            <p>
                                                <h4>{productDetails.configuration_header}</h4>
                                                <ul>
                                                    {productDetails.configuration_items.length &&
                                                    productDetails.configuration_items.map(item => (
                                                        <li key={item}>{item}</li>))
                                                    }
                                                </ul>
                                            </p>
                                            <div className="productDetail__features-configuration__image">
                                                {productDetails.configuration_img.length &&
                                                productDetails.configuration_img.map(image => (<img
                                                    src={require('../../images/connectionDiagram/' + image.toString())}/>))
                                                }
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={3} title="Technical Data">
                                        <div className="productDetail__features-tech">
                                            <Table responsive>
                                                <tbody>
                                                {productDetails.tech_data &&
                                                Object.keys(productDetails.tech_data).map(key => (
                                                    <tr>
                                                        <th>{key}</th>
                                                        <td>{productDetails.tech_data[key]}</td>
                                                    </tr>

                                                ))
                                                }
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
                                <h3><Material.MdComment style={{'margin-right': '10px'}}/>Contact Sales</h3>
                                <h4>{productDetails.contact_name}</h4>
                                <a href={"mailto:" + productDetails.contact_email}><Material.MdCreate
                                    style={{'margin-right': '10px'}}/>E-mail</a>
                            </div>
                        </div>
                        <div className="productDetail__support-cataloguebox">
                            <div className="productDetail__support-content">
                                <h3><FontAwesome.FaBook style={{'margin-right': '10px'}}/>Catalogue</h3>
                                <a href={require('../../resources/' + productDetails.catalogue)}
                                   download={productDetails.catalogue}><Material.MdArrowDownward
                                    style={{'margin-right': '10px'}}/>Download Catalogue</a>
                            </div>
                        </div>
                        <div className="productDetail__support-downloadbox">
                            <div className="productDetail__support-content">
                                <h3><GitIcons.GoMoveDown style={{'margin-right': '10px'}}/>Download</h3>
                                <a href={require('../../resources/' + productDetails.user_manual)}
                                   download={productDetails.user_manual}><h4><GitIcons.GoChevronRight
                                    style={{'margin-right': '10px'}}/>User Manual</h4></a>
                                <a href={require('../../resources/' + productDetails.presentation)}
                                   download={productDetails.presentation}><h4><GitIcons.GoChevronRight
                                    style={{'margin-right': '10px'}}/>Presentation</h4></a>
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
                                        id="userName"/>
                                    <label htmlFor="email">Email Id:</label>
                                    <input
                                        value={this.state.user.email}
                                        onChange={this.handleUserMailIdChange}
                                        type="text"
                                        className="form-control"
                                        id="email"/>
                                    <label htmlFor="mobile">Mobile Number:</label>
                                    <input
                                        value={this.state.user.mobile}
                                        onChange={this.handleUserMobileNoChange}
                                        type="text"
                                        className="form-control"
                                        id="mobile"/>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize="small" bsStyle="info" onClick={this.submit}>Submit Request</Button>
                            <Button bsSize="small" bsStyle="info" onClick={this.close}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>
                }
            </div>
        );
    }
}

ProductDetail.propTypes = {
    products: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {
    products: []
};

function mapStateToProps(state) {
    const products = state.siteData.get('products');
    const show_overlay = state.spzManagement.get('show_overlay');
    return {
        products: products || [],
        show_overlay: show_overlay ? show_overlay : null
    };
}

export default connect(mapStateToProps)(ProductDetail);