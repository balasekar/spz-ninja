import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';
import {PropTypes} from 'prop-types';

import { askUserDetails, closeUserDetails, saveUserDetails} from '../../actionCreators';
import {Grid, Row, Col, Modal, Button} from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MateraialIcons from 'react-icons/lib/md';

import imageSrc from '../../images/SPZ_Home.jpeg';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_overlay: props.show_overlay,
            user: {}
        };
        autobind(this);
    }

    contactusPanel = () => {
        this.setState({show_overlay: 'Contact Us'});
        this.props.dispatch(askUserDetails('Contact Us'));
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

    handleCommentsChange(event) {
        let user = this.state.user;
        user.comments = event.target.value;
        this.setState({user: user});
    }

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
                        <Col xs={6} md={6}>
                            <div className='aboutUs'>
                                <h2>Welcome</h2>
                                <p>
                                    Spowerz is a globally recognized provider of intelligent industrial solutions and
                                    cutting-edge electro-technical products.
                                </p>
                                <p>
                                    We are high-performing company with long innovative tradition, wide engineering
                                    knowledge and experience with the most demanding industrial projects.
                                    Always ready to offer the best system integrated solutions to optimize
                                    your business. Your security, efficiency and success is our focus and priority.
                                </p>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className='SPZ__Row'>
                                <a href='#/solutions' className='SPZ_Page'>
                                    <FontAwesome.FaCubes className='SPZ_Page-element'/><br/> Solutions
                                </a>
                                <a href='#/products' className='SPZ_Page'>
                                    <FontAwesome.FaCartArrowDown className='SPZ_Page-element'/><br/> Products
                                </a>
                            </div>
                            <div className='SPZ__Row'>
                                <a href='#/clients' className='SPZ_Page'>
                                    <MateraialIcons.MdPeople className='SPZ_Page-element'/><br/> Clients
                                </a>
                                <a onClick={this.contactusPanel} href='#' className='SPZ_Page'>
                                    <FontAwesome.FaEnvelopeSquare className='SPZ_Page-element'/><br/> Contact Us
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Modal show={!!this.props.show_overlay} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Contact Details</Modal.Title>
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
                                        value={this.state.user.mail_id}
                                        onChange={this.handleUserMailIdChange}
                                        type="text"
                                        className="form-control"
                                        id="email"/>
                                    <label htmlFor="mobile">Mobile Number:</label>
                                    <input
                                        value={this.state.user.mobile_no}
                                        onChange={this.handleUserMobileNoChange}
                                        type="text"
                                        className="form-control"
                                        id="mobile"/>
                                    <label htmlFor="comments">Comments:</label>
                                    <textarea rows="4" cols="50"
                                        value={this.state.user.comments}
                                        onChange={this.handleCommentsChange}
                                        type="textarea"
                                        className="form-control"
                                        id="comments"/>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize="small" bsStyle="info" onClick={this.submit}>Send Message</Button>
                            <Button bsSize="small" bsStyle="info" onClick={this.close}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>
            </div>
        );
    }
}


Home.propTypes = {
    show_overlay: PropTypes.string,
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

Home.defaultProps = {
    solutions: [],
    show_overlay: '',
    user: null
};

function mapStateToProps(state) {
    const show_overlay = state.spzManagement.get('show_overlay');
    const user = state.spzManagement.get('user_details');
    return {
        show_overlay,
        user: user ? user : null
    };
}

export default connect(mapStateToProps)(Home);