
import{ BrowserRouter,Navigate,Route, Routes } from 'react-router-dom'
import ItemListContainer from './containers/ItemListContiner/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import  Navbar  from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const tit = 'Este titulo viene de app' // estado
    const saludo = () => console.log('saludo de app')
  return (
    <BrowserRouter>
      <div className="App"> 
       <Navbar/>
            <Routes> 
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/' element={<ItemListContainer greeting='soy ITEMLISTCONTAINER' />}/>
              <Route path='/categoria/:categoriasId' element={<ItemListContainer greeting='soy ITEMLISTCONTAINER' />}/>
              <Route path='/*' element={<Navigate to='/' replace/>}/>
            </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
