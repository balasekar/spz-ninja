import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';
import {PropTypes} from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import {fetchSolutions, askUserDetails, closeUserDetails, saveUserDetails} from '../../actionCreators';

import SolutionPanel from '@components/solution/index';
import Grid from 'react-bootstrap/lib/Grid';
import "./solutions.css";

class Solutions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_overlay: props.show_overlay,
            user: {}
        };
        autobind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchSolutions());
    }

    askForQuote = (solutionName) => {
        this.setState({show_overlay: solutionName});
        this.props.dispatch(askUserDetails(solutionName));
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
        return (
            <Grid className="app_container">
                {this.props.solutions &&
                this.props.solutions.map((solution) => (
                    <SolutionPanel image={solution.image} title={solution.title} desc={solution.desc}
                                   implementations={solution.implementations} key={solution.id}
                                   askForQuote={this.askForQuote}
                    />
                ))}
                <Modal show={!!this.props.show_overlay} onHide={this.close}>
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
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize="small" bsStyle="info" onClick={this.submit}>Ask For Quote</Button>
                        <Button bsSize="small" bsStyle="info" onClick={this.close}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </Grid>
        );
    }
}

Solutions.propTypes = {
    solutions: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    show_overlay: PropTypes.string,
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

Solutions.defaultProps = {
    solutions: [],
    show_overlay: '',
    user: null
};

function mapStateToProps(state) {
    const solutions = state.siteData.get('solutions');
    const show_overlay = state.spzManagement.get('show_overlay');
    const user = state.spzManagement.get('user_details');
    return {
        solutions: solutions || [],
        show_overlay,
        user: user ? user : null
    };
}

export default connect(mapStateToProps)(Solutions);