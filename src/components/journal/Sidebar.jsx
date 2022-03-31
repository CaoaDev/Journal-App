import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const { name, photoURL } = useSelector( state => state.auth );
    const handleLogout = () => {
        dispatch( startLogout() )
    }
    const handleAddEntry = () => {
        dispatch( startNewNote() )
    }

  return (
    <aside className='sidebar'>
        <div className='sidebar__navbar'>
            <h3 className='mt-5'>
                <i className="far fa-moon"></i>
                <span>{ name }</span>
                <img src={ photoURL } alt={ name } />
            </h3>
            <button 
                className='btn'
                onClick={ handleLogout }
            >
                Logout
            </button>
        </div>
        <div 
            className='sidebar__new-entry'
            onClick={ handleAddEntry }
        >
            <i className='far fa-calendar-plus fa-5x' />
            <p className='mt-5'>
                New Entry!!
            </p>
        </div>
        <JournalEntries />
    </aside>
  )
}
