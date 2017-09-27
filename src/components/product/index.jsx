import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/lib/Col';
import "./product.css";

export default class Product extends React.PureComponent {
render() {
    const {title, image} = this.props;
    return (
            <Col xs={6} md={4} lg={3}>
                <div className="product__div">
                        <img className="product__img" src={require('../../images/products/'+image.toString())} alt={title}/>
                        <div className="product__heading">{title}</div>
                </div>
            </Col>
        );
    }
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
};

Product.defaultProps = {
    image: 'DC',
    title: ''
};

export const ProductContainer = connect()(Product);
