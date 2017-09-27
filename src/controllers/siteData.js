import { fromJS } from 'immutable';

export const PRODUCTS = 'PRODUCTS_SUCCESS';
export const CLIENTS = 'CLIENTS_SUCCESS';
export const SOLUTIONS = 'SOLUTIONS_SUCCESS';


const initialState = fromJS({
    products: [],
    clients: [],
    solutions: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
            return state.set('products', action.data.products);
        case CLIENTS:
            return state.set('clients', action.data.clients);
        case SOLUTIONS:
            return state.set('solutions', action.data.solutions);
        default :
            return state;
    }
}