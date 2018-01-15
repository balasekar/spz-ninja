import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {fetchClients} from '../../actionCreators';

import {Grid, Row, Col, Panel} from 'react-bootstrap';
import './contactUs.scss';

class ContactUs extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchClients());
  }

  render() {
    return (
      <Grid fluid={true} className="app_container">
        <Panel className="client_panel" header={<h2>CONTACT US</h2>} bsStyle="info">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="client__div">

              </div>
            </Col>
          </Row>
        </Panel>
      </Grid>
    );
  }
}

ContactUs.propTypes = {
  clients: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  dispatch: PropTypes.func.isRequired
};

ContactUs.defaultProps = {
  clients: []
};

function mapStateToProps(state) {
  const clients = state.siteData.get('clients');
  return {
    clients: clients || []
  };
}

export default connect(mapStateToProps)(ContactUs);