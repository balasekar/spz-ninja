import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {fetchProducts} from '../../actionCreators';

import Product from '../../components/product/index';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import './products.css';

class Products extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProducts())
    }

    render() {
        return (
            <Grid className="app_container">
                <Panel className="product_panel" header={<h2>PRODUCTS</h2>} bsStyle="info">
                    <Row>
                        {this.props.products &&
                        this.props.products.map((product) => (
                            <Product image={product.image} title={product.title} key={product.id}/>
                        ))}
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

Products.propTypes = {
    products: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    dispatch: PropTypes.func.isRequired
};

Products.defaultProps = {
    products: []
};

function mapStateToProps(state) {
    const products = state.siteData.get('products');
    return {
        products: products || []
    };
}

export default connect(mapStateToProps)(Products);