import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/lib/Col';
import "./client.css";

export default class Client extends React.PureComponent {
    render() {
        const {title, image} = this.props;
        return (
            <Col xs={6} md={4} lg={3}>
                <div className="client__div">
                    <img className="client__img" src={image} alt={title}/>
                    <div className="client__heading">{title}</div>
                </div>
            </Col>
        );
    }
}

Client.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string
};

Client.defaultProps = {
    image: null,
    title: ''
};

export const ClientContainer = connect()(Client);
