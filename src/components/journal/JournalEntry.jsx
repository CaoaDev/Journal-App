import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ( { id, date, title, body, url } ) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch( 
      activeNote ( id, {
        date, title, body, url
      })
    );
  }
  return (
    <div 
      className='journal__entry pointer animate__animated animate__fadeInLeft animate__faster'
      onClick={ handleEntryClick }  
    >
      { 
        url && 
        <div
          className='__entry-picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${ url } )`
            // https://www.todofondos.net/wp-content/uploads/fondo-de-pantalla-de-etiqueta-relajante-pagina-4-Arboles-relajantes-cascadas-iceys-1024x576.jpg
          }}
        />
      }
      <div className='__entry-body'>
        <p className='__entry-title'>
          { title }
        </p>
        <p className='__entry-content'>
          { body }
        </p>
      </div>
      <div className='__entry-date-box'>
        <span> { noteDate.format( 'dddd' ) } </span>
        <h4> { noteDate.format( 'Do' ) } </h4>
      </div>
    </div>
  )
}
