import React from 'react';
import PropTypes from 'prop-types';

import { Route, } from 'react-router-dom';
import { LoginScreen } from '../../srcmio/components/auth/LoginScreen';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Route path='/*' element={<LoginScreen />} /> )
            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
