import { useState, useEffect } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import Itemlist from "../../components/Itemlist/Itemlist"
import  getFetch  from "../../helpers/getFetch"


function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFetch// llamada a la api
    .then((respuesta)=> {
      //throw new Error('Esto es un error')
      //console.log(respuesta) //json  convierto a objeto js
      return respuesta
    })
    .then((resp) => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))    
  }, [])
  
    const onAdd = (cant) => {
       console.log(cant) 
    }

  console.log(productos)
  return (
      // [1,2,3,4] => nuevo arra [<li>1</li>, ....]
      <>
            <h1>{ greeting }</h1>
            {   loading ? <h1>Cargando...</h1>
                :
                <Itemlist productos= {productos} />
                
            
                                         
            }
            <ItemCount initial = {1} stock = {10} onAdd={ onAdd } />
        </>
    )}
export default ItemListContainer