import React from 'react'
import TituloApp from '../Titulo/TituloApp'

function ComponenteContenedor( { saludo } ) {
  return (
    <div>
        <TituloApp titulo= {'titulo contenedor'} subtitulo='soy subtitulo de contenedor' saludo={() => console.log('saludo')}  />
        <h3>{saludo}</h3>
    </div>
  )
}

export default ComponenteContenedor