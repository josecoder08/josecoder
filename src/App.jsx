
import{ BrowserRouter,Navigate,Route, Routes } from 'react-router-dom'
import ItemListContainer from './containers/ItemListContiner/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import  Navbar  from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './containers/Context/CartContext';


function App() {
 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App"> 
        <div className='titulo'>Multideportes</div>
        <div>
        <img className='img'src="https://thumbs.dreamstime.com/b/kids-sports-summer-camp-8497320.jpg"alt="" /> 
        </div>
          <Navbar/>
            <Routes> 
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/categoria/:categoriasId' element={<ItemListContainer />}/>
              <Route path='/*' element={<Navigate to='/' replace/>}/>
            </Routes>
        </div>
        <footer>
         <div className='color'>
           <h2>direccion de correo:vdeportes@gmail.com</h2>
           <h2>Centro de Atención al Cliente </h2> <br />
           <h2>Lunes a Viernes de 9 a 20 hs / Sábado de 9 a 17 hs</h2><br />
                     <h2>Contacto
                       WhatsApp
                     0810-555-2222</h2>
         </div>
       </footer>
      </BrowserRouter>
    </CartContextProvider>
      
  );
  


}

export default App;
