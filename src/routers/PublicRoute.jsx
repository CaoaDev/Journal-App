import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import PropTypes from 'prop-types';

export const PublicRoute = ( { children, isValid } = {} ) => {
    return isValid
        ?( <Navigate to='/' element={ < AuthRouter /> } /> )

        : children
}

PublicRoute.propTypes = {
    isValid: PropTypes.bool.isRequired,
}