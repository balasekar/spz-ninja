import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import siteData from './siteData';
import spzManagement from './spzManagement';


export default combineReducers({
    routing: routerReducer,
    siteData,
    spzManagement
});