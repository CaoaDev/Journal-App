import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = ( { date } ) => {
    const noteDate = moment( date );
    const dispatch = useDispatch    ();
    const { active } = useSelector( state => state.notes );
    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    };
    const handlePicture = () => {
        document.querySelector( '#fileselect' ).click();
    };
    const handlefile = ( e ) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch ( startUploading( file ) );
        }
    };

  return (
    <div className='notes__appbar'>
        <span>{ noteDate.format( 'dddd, MMMM Do YYYY' ) }</span>
        <input 
            id='fileselect'
            type='file'
            name='file'
            style={ { display: 'none' } }
            onChange={ handlefile }
        />
        <div>
            <button 
                className='btn'
                onClick={ handlePicture}
            >
                Picture
            </button>
            <button 
                className='btn'
                onClick={ handleSave}
            >
                Save
            </button>
        </div>
    </div>
  )
}
