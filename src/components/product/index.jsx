import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

import Col from 'react-bootstrap/lib/Col';
import "./product.css";

export default class Product extends React.PureComponent {
    render() {
        const {title, image, desc, id} = this.props;
        console.log('What the props:', this.props);
        return (
            <Col xs={12} md={6}>
                <div className="product__div">

                    <div className="product__img_div">
                        <img className="product__img" src={require('../../images/products/' + image.toString())}
                             alt={title}/>
                    </div>
                    <div className="product__desc_div">
                        <div className="product__heading">{title}</div>
                        <div className="product__desc">
                            {desc}
                        </div>
                        <Button className="product__button" bsSize="small" bsStyle="info"><a href={"#/productDetails/"+id}>Read more >></a></Button>
                    </div>
                </div>
            </Col>
        );
    }
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.number
};

Product.defaultProps = {
    image: 'DC',
    title: '',
    desc: '',
    id: 1
};

export const ProductContainer = connect()(Product);
