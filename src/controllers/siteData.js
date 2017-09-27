import { fromJS } from 'immutable';

export const PRODUCTS = 'PRODUCTS_SUCCESS';

const initialState = fromJS({
    products: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS: {
            return state.set('products', action.data.products);
        }
        default :
            return state;
    }
}