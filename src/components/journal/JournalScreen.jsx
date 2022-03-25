import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
// import { NoSelect } from './NoSelect';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
        <Sidebar />
        <main>
          {/* <NoSelect /> */}
          <NoteScreen />
        </main>
    </div>
  )
}
