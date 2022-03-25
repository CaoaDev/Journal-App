import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';
import { AuthRouter } from './AuthRouter';
// import PropTypes from 'prop-types';

// export const PublicRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {
// return (
//     <Route { ...rest }
//         component={ (props) => (
//             ( isAuthenticated )
//                 ? <Navigate to='/' />
//                 : <Component { ...props } />
//         )}     
//     />
// )
    export const PublicRoute = ( { children } = {} ) => {
        // const { user } = useContext( AuthContext );
    return false
        ? <Navigate to='/' element={ < AuthRouter /> } />

        : children
}

// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }