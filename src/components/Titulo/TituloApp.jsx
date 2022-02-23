

const TituloApp = ( {titulo, subtitulo, saludo} ) => {   
    
    return (
        <div>
            <h1>{ titulo }</h1>
            <h2>{ subtitulo }</h2>
            <h1>Soy titulo de app</h1>
            <button onClick={saludo} >Ejecutar saludo</button>
        </div>
        
    )
}
export default TituloApp