import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import siteData from './siteData';

export default combineReducers({
    routing: routerReducer,
    siteData
});