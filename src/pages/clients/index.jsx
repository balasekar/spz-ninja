import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {fetchClients} from '../../actionCreators';

import {Grid, Row, Col, Panel} from 'react-bootstrap';
import './clients.css';

class Clients extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchClients())
    }

    render() {
        return (
            <Grid className="app_container">
                <Panel className="client_panel" header={<h2>CLIENTS</h2>} bsStyle="info">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="client__div">
                                <img className="client__img"
                                     src={require('../../images/clients/clients.png')} alt='Clients'/>
                            </div>
                            <div className="client__div">
                                <img className="client__img"
                                     src={require('../../images/clients/clients1.png')} alt='Partners'/>
                            </div>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

Clients.propTypes = {
    clients: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    dispatch: PropTypes.func.isRequired
};

Clients.defaultProps = {
    clients: []
};

function mapStateToProps(state) {
    const clients = state.siteData.get('clients');
    return {
        clients: clients || []
    };
}

export default connect(mapStateToProps)(Clients);