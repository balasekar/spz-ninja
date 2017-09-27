import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {fetchClients} from '../../actionCreators';

import Client from '../../components/client/index';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
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
                        {this.props.clients &&
                        this.props.clients.map((client) => (
                            <Client image={client.image} title={client.title} key={client.id}/>
                        ))}
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