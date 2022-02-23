import TituloApp from "../Titulo/TituloApp"

const InputApp = (obj) => {
    
    console.log(obj)

    return <div>
        <TituloApp titulo= {'soy titulo de input'} subtitulo='soy subtitulo de input' saludo={() => console.log('saludo input')}  />
        <input /> <br />
        <input />
        { obj.children[0] }
    </div>
}

export default InputApp