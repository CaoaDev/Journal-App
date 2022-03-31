import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDelete } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active:note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title, id } = formValues;
  const activeId = useRef( note.id );

  useEffect(() => {
    if ( note.id !== activeId.current ) {
      reset( note );
      activeId.current = note.id;
    }
  }, [ note, reset ] );

  useEffect(() => {
    dispatch( activeNote( formValues.id, { ...formValues } ) )
  }, [ formValues, dispatch ] );
  
  const handleDelete = () => {
    dispatch( startDelete( id ) );
  };

  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='__content'>
          <input
            type='text'
            placeholder='Some awesometitle'
            name='title'
            className='__title-input'
            autoComplete='off'
            value={ title }
            onChange={ handleInputChange }
          />
          <textarea 
            placeholder='What happened today'
            name='body'
            className='__textarea'
            value={ body }
            onChange={ handleInputChange }
          />
          {
            ( note.url )
            && (
              <div className='__image'>
                <img
                  src={ note.url }
                  alt='imagen'
                />
              </div>
            )
          }
        </div>
        <div className='__footer'>
          <button 
            className="btn btn-danger"
            onClick={ handleDelete }
          >
            Delete
          </button>
        </div>
    </div>
  )
}
