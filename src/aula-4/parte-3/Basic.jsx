import React from 'react';
import PropTypes from 'prop-types';

export const Basic = ({ name }) => (
    <p>Meu nome é {name}</p>
)

Basic.propTypes = {
    name: PropTypes
}