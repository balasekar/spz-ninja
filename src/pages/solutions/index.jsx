import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {fetchSolutions} from '../../actionCreators';

import SolutionPanel from '../../components/solution/index';

import Grid from 'react-bootstrap/lib/Grid';
import "./solutions.css";

class Solutions extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchSolutions())
    }
    render() {
        return (
                <Grid className="app_container">
                    {this.props.solutions &&
                    this.props.solutions.map((solution) => (
                        <SolutionPanel image={solution.image} title={solution.title} desc={solution.desc}
                                       implementations={solution.implementations} key={solution.id}/>
                    ))}
                </Grid>
        );
    }
}

Solutions.propTypes = {
    solutions: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    dispatch: PropTypes.func.isRequired
};

Solutions.defaultProps = {
    solutions: []
};

function mapStateToProps(state) {
    const solutions = state.siteData.get('solutions');
    return {
        solutions: solutions || []
    };
}

export default connect(mapStateToProps)(Solutions);