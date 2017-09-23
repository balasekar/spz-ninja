import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

import "./solutionPanel.css";

export default class SolutionPanel extends React.PureComponent {
    render() {
        const {title, image, desc, implementations} = this.props;
        return (
            <Panel className="solution_panel" header={<h2>{title}</h2>} bsStyle="info">
                <Col xs={12} md={6}>
                    <img className="solution_image" src={image} alt={title}/>
                </Col>
                <Col xs={12} md={6}>
                    <p>
                        {desc}
                    </p>
                    <ul>
                        {implementations.map(implementation =>(
                            <li>{implementation}</li>
                            ))}
                    </ul>
                    <Button className="solution_button" bsSize="small" bsStyle="info">Ask for quote >></Button>
                </Col>
            </Panel>
        );
    }
}

SolutionPanel.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    desc: PropTypes.string,
    implementations: PropTypes.array
};

SolutionPanel.defaultProps = {
    image: null,
    title: '',
    desc: '',
    implementations: []
};

export const SolutionContainer = connect()(SolutionPanel);
