import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

import "./solution.css";

export default class SolutionPanel extends React.PureComponent {

    constructor(props) {
        super(props);
        this.askForQuote = this.askForQuote.bind(this);
    }

    askForQuote() {
            this.props.askForQuote(this.props.title);
    }


    render() {
        const {title, image, desc, implementations} = this.props;
        return (
            <Panel className="solution_panel" header={<h2>{title}</h2>} bsStyle="info">
                <Row>
                    <Col xs={12} md={6}>
                        <img className="solution_image" src={require('../../images/solutions/' + image.toString() )}
                             alt={title}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <p>
                            {desc}
                        </p>
                        <ul>
                            {implementations.map(implementation => (
                                <li key={implementation.value}>{implementation.value}</li>
                            ))}
                        </ul>
                        <Button className="solution_button" bsSize="small" bsStyle="info" onClick={this.askForQuote}>Ask for quote >></Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

SolutionPanel.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    implementations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    askForQuote: PropTypes.func.isRequired
};

SolutionPanel.defaultProps = {
    image: 'DC.jpg',
    title: '',
    desc: '',
    implementations: [],
    askForQuote: null
};


export const SolutionContainer = connect()(SolutionPanel);
