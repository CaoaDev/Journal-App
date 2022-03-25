import React from 'react'

export const NotesAppBar = () => {
  return (
    <div className='notes__appbar'>
        <span>14 de Marzo 2022</span>
        <div>
            <button className='btn'>
                Picture
            </button>
            <button className='btn'>
                Save
            </button>
            <button className='btn'>
                Delete
            </button>
        </div>
    </div>
  )
}
