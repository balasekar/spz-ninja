import React from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home/Home';

const HomePageContainer = ({pageDetails}) => (
    <Home img = {pageDetails.img}
        title = {pageDetails.title}
        text = {pageDetails.text}/>
);

function mapStateToProps(state) {
    return {
        pageDetails: state.pageDetails
    };
}

export default connect(mapStateToProps)(HomePageContainer);
