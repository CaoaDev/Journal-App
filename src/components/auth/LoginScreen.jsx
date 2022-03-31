import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const { msgError } = useSelector ( state => state.ui );
  
  const [ formValues, handleInputChange, ] = useForm({
    email: '',
    password: ''
  });
  
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
      dispatch( startLoginEmailPassword( email, password ) )
};

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <>
      <h3 className='auth__title'><center>Login</center></h3>
      <form 
        onSubmit={ handleLogin }
        className="animate__animated animate__fadeIn animate__faster"
      >
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
          value={ password }
          onChange={ handleInputChange }
        />
        <button
          type='submit'
          className='btn btn-primary btn-block'
          disabled={ loading }
        >
          Acceder
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
        <Link
          to='/auth/regis'
          className='link'
        >
          Create Neew Account
        </Link>
      </form>
    </>
  )
} 