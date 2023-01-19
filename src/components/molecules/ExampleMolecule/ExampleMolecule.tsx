import React from 'react';
import PropTypes from 'prop-types';

ExampleMolecule.propTypes = {
    text: PropTypes.string
};

export function ExampleMolecule({text = 'Default molecule text'}) {
    return (
        <div>{text}</div>
    );
}