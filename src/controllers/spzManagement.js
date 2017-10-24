import { fromJS } from 'immutable';

export const ASK_USER_DETAILS = 'ASK_USER_DETAILS';
export const SAVE_REQUEST_DETAILS= 'SAVE_REQUEST_DETAILS_SUCCESS';
export const CLOSE_USER_DETAILS= 'CLOSE_USER_DETAILS';

const initialState = fromJS({
    show_overlay: null,
    user_details: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ASK_USER_DETAILS:
            return state.set('show_overlay', action.data);
        case SAVE_REQUEST_DETAILS: {
            state = state.set('user_details', action.data);
            state = state.set('show_overlay', null);
            return state;
        }
        case CLOSE_USER_DETAILS:
            return state.set('show_overlay', null);
        default :
            return state;
    }
}