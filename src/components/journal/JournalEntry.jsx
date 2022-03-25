import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://www.todofondos.net/wp-content/uploads/fondo-de-pantalla-de-etiqueta-relajante-pagina-4-Arboles-relajantes-cascadas-iceys-1024x576.jpg)'
        }}/>
        <div className='journal__entry-body'>
          <p className='journal__entry-title'>
            Inicio de Dia
          </p>
          <p className='journal__entry-content'>
            asdsdsadasdasdasdasads
          </p>
        </div>
        <div className='journal__entry-date-box'>
          <span>Monday</span>
          <h4>14</h4>
        </div>
    </div>
  )
}
