import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import HomePageContainer from '../containers/HomePageContainer';

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={HomePageContainer} />
            </Router>
        )
    }
}