import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
import { AuthRouter } from '../../srcmio/routers/AuthRouter';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Route path='/*' element={ <AuthRouter /> } /> )
                    : ( <Component { ...props } /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
