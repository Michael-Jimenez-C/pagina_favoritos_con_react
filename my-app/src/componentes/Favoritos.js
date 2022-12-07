import React from 'react';
import '../hojas-de-estilo/Favoritos.css';

function Favoritos(props) {
  return (
    <div className='contenedor-favoritos'>
      <img 
        className='imagen-favoritos'
        src={`${props.imagen}`}
        alt='Imagen de referencia'
      />
      <div className='contenedor-texto-favoritos'>
        <p className='nombre-favoritos'>Cancion {props.nombre}</p>
        <p className='cargo-favoritos'>Escuchala aqui en <a href={`${props.web}`} > Youtube </a> </p>
        <p className='texto-favoritos'>{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Favoritos;