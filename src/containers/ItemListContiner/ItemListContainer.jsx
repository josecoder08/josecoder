import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../../components/ItemCount/ItemCount"
import Itemlist from "../../components/Itemlist/Itemlist"
import { collection, getDocs,getFirestore, where ,query}from 'firebase/firestore'
import  getFetch  from "../../helpers/getFetch"


function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {categoriasId} = useParams()
    
  useEffect(() => {
    if (categoriasId) {
     getFetch// llamada a la api
      .then((respuesta)=> {
        //throw new Error('Esto es un error')
        //console.log(respuesta) //json  convierto a objeto js
       return respuesta
      })
    .then((resp) => setProductos(resp.filter(pro=>pro.categoria===categoriasId)))
     .catch(err => console.log(err))
      .finally(()=> setLoading(false)) 
      
    } else {
     getFetch// llamada a la api
      .then((respuesta)=> {
        //throw new Error('Esto es un error')
        //console.log(respuesta) //json  convierto a objeto js
       return respuesta
     })
     .then((resp) => setProductos(resp))
     .catch(err => console.log(err))
     .finally(()=> setLoading(false)) 
      
   }
    
      
  }, [categoriasId])
// todos coleccion
//useEffect(()=>{
 // const db = getFirestore()
 // const queryColection = collection(db,'items')
 // getDocs(queryColection)
 // .then(resp => setProductos( resp.docs.map(item => ({id: item.id, ...item.data()}))))
 // .catch(err => console.log(err))
 // .finally(()=> setLoading(false)) 
//},[])

//useEffect(()=>{
 // const db = getFirestore()
 // const queryColection = collection(db,'items')
 // const queryFilter = query(queryColection, where('price','==',55))
 // getDocs(queryFilter)
 // .then(resp => setProductos( resp.docs.map(item => ({id: item.id, ...item.data()}))))
 // .catch(err => console.log(err))
 // .finally(()=> setLoading(false)) 
//},[])

  
  
    const onAdd = (cant) => {
       console.log(cant) 
    }
// poner en console.log productos
  console.log(categoriasId)
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