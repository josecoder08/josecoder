
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import InputApp from './components/Input/Input'
import ComponenteContenedor from './components/ComponenteContedor/ComponenteContenedor'
import ComponenteImagen from './components/IconoCart'
import TituloApp from './components/Titulo/TituloApp'

function App() {
  const tit = 'Este titulo viene de app' // estado
    const saludo = () => console.log('saludo de app')
  return (
    <div className="App">
      <NavBar />
      <TituloApp  titulo= {tit} subtitulo='soy subtitulo' saludo={saludo} />
            <InputApp >
                <ComponenteImagen />            
                <ComponenteImagen />            
            </InputApp> 
            <ComponenteContenedor saludo='hola soy componente contenedor' />
    </div>
  );
}

export default App;
