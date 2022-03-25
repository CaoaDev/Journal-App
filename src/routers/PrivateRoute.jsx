import React, { useContext } from 'react';
import { Navigate, Route } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { AuthRouter } from './AuthRouter';
import PropTypes from 'prop-types';

export const PrivateRoute = ( { children, isAuthenticate } = {} ) => {
    // export const PrivateRoute = ({
    //     isAuthenticated,
    //     component: Component,
    //     ...rest
    // }) => {
    // return (
    //     <Route { ...rest }
    //     component={ ( props )  => (
    //         ( isAuthenticated )
    //             ? <Component { ...props } /> 
    //             : <Navigate to='/auth/login' />
    //         )}
    //     />
    // )
    // const user = useContext( AuthRouter );
    // console.log(user);
    return isAuthenticate
        ? children
        : <Navigate to='/auth/login' element={ < LoginScreen /> } />
}

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }