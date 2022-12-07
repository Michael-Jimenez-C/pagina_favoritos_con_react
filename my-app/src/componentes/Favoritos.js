import React from 'react';

function Favoritos()
{
  return
  (
    <div className='contenedor-favoritos'>
      <img 
        className='imagen-favoritos'
        src={require('../imagenes/desktop-ubuntu.png')}
        alt='Escritorio Ubuntu'
      />
      <div className='contenedor-texto-favoritos'>
        <p className='nombre-favoritos'>Escritorio Debian</p>
        <p className='cargo-favoritos'>Debian ORG</p>
        <p className='texto-favoritos'>Esta es una de las distros mas antiguas, conocida por ser leyenda.</p>
      </div>
    </div>
  );
}

export default Favoritos;