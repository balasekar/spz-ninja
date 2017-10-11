import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import {fetchProducts} from '../../actionCreators';

import './productDetails.css';

class ProductDetail extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts())
    }

    componentWillReceiveProps(nextProps) {
        console.log('What the props:', nextProps.match.params.productId);
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
                                    <Button bsSize="small" bsStyle="info" >Product Request</Button><br/>
                                    <img src={require('@images/productDetails/industry.png')} style={{width: '100px'}} alt={'Industry'}/>
                                    <img src={require('@images/productDetails/feeder.png')} style={{margin:'10px 20px',width: '100px'}} alt={'feeder'}/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <img src={require('@images/products/DC.jpg')} alt={'Meter'}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="productDetail__features">
                        Features
                    </div>
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
    return {
        products: products || []
    };
}

export default connect(mapStateToProps)(ProductDetail);