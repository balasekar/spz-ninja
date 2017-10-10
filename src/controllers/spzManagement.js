import { fromJS } from 'immutable';

export const ASK_USER_DETAILS = 'ASK_USER_DETAILS';
export const SAVE_USER_DETAILS= 'SAVE_USER_DETAILS';
export const CLOSE_USER_DETAILS= 'CLOSE_USER_DETAILS';

const initialState = fromJS({
    show_overlay: null,
    user_details: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ASK_USER_DETAILS:
            return state.set('show_overlay', action.data);
        case SAVE_USER_DETAILS: {
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