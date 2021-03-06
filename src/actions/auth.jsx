import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { noteLogoutClean } from './notes';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword= ( email, password ) => {
    return ( dispatch ) => {
        dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ( { user } ) => {
            dispatch( login( user.uid, user.displayName, '' ) );
            dispatch( finishLoading () );
        })
        .catch( e => {
            dispatch( finishLoading () );
            // Swal.fire( 'Error', e.message='No sirve'  )
            console.log(e);
            Swal.fire( 'Error', e.message, 'error' )
        })
    };
};
// para que funcione tiene que ir el email al incio
export const startRegistrer = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {
                await user.updateProfile( { displayName: name } );
                dispatch(
                    login( user.uid, user.displayName, '' )
                )
            })
            .catch( e => {
                Swal.fire( 'Error', e.message, 'error' )
                console.log( e );
            });
    };
};

export const startGoogleLogin= () => {
    return ( dispatch ) =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            dispatch(
                login( user.uid, user.displayName, user.photoURL )
            );
        });
    };
};

export const login = ( uid, displayName, photoURL ) => ({
        type: types.login,
        payload: {
            uid,
            displayName,
            photoURL
        }
});

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout() );
        dispatch( noteLogoutClean() );
    }
}

export const logout = () => ({
    type: types.logout
})