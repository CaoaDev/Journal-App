import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { startGoogleLogin, startRegistrer } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

export const RegistrerScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const { msgError } = useSelector ( state => state.ui );
  
  const [ formValues, handleInputChange ] = useForm({
    name: 'Charles',
    email: 'papito@gmail.com',
    password: '123456',
    password2: '123456',
  });
  
  const { name, email, password, password2 }= formValues;
  
  const handleRegistrer = (e) => {
    e.preventDefault();
    if( isFormValid() ){
      dispatch( startRegistrer( email, password, name ) )
    }
  };
  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }
  
  const isFormValid = () => {
    if( name.trim().length === 0 ) {
        dispatch( setError( 'Name is Required ' ) )
        return false;
      } else if ( !validator.isEmail( email ) ) {
        dispatch( setError('Email is Required ') )
        return false;
    } else if ( password.trim().length === 0 ){
        dispatch( setError( 'Password is Required ' ) )
        return false;
    } else if ( password2.trim().length === 0 ){
        dispatch( setError( 'Password Confirm is Required ' ) )
        return false;
    } else if ( password !== password2 || password.length < 4 ){
        dispatch( setError( 'The passwords have to be identical and have more than 4 letters ' ) )
        return false;
    }
    dispatch( removeError() )
    return true;
  }
  
  return (
    <>
    <h3 className='auth__title'><center>Registrer</center></h3>
    <form onSubmit={ handleRegistrer }>
      {
        msgError &&
        ( 
        <div className='auth__alert-error'>
            { msgError } 
        </div>
        )
      }
      <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
      <input
          type='text'
          placeholder='Em@il'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          autoComplete='off'
          value={ password }
          onChange={ handleInputChange }
        />
      <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          className='auth__input'
          autoComplete='off'
          value={ password2 }
          onChange={ handleInputChange }
        />
      <button
          type='submit'
          className='btn btn-primary btn-block'
          disabled={ loading }
        >
          Registro
        </button>
        <div className='auth__social-networks'>
          <h3>Socail Networks</h3>
            <div 
              className="google-btn"
              onClick={ handleGoogleLogin }
              >
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
            </div>
        </div>
      <div className='mb-5'>
        <Link
          to='/auth/login'
          className='link'
        >
          Alredy Registered??
        </Link>
      </div>
    </form>
  </>
  )
}
