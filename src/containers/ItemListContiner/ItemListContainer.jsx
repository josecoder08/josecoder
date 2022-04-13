import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "../../components/Itemlist/Itemlist"
import { collection, getDocs,getFirestore, where ,query}from 'firebase/firestore'
import '../ItemListContiner/ItemListContainer.css';



function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {categoriasId} = useParams()
    
 // useEffect(() => {
   // if (categoriasId) {
   //  getFetch// llamada a la api
    //  .then((respuesta)=> {
        //throw new Error('Esto es un error')
        //console.log(respuesta) //json  convierto a objeto js
    //   return respuesta
   //   })
   // .then((resp) => setProductos(resp.filter(pro=>pro.categoria===categoriasId)))
   //  .catch(err => console.log(err))
   //   .finally(()=> setLoading(false)) 
      
   // } else {
    // getFetch// llamada a la api
    //  .then((respuesta)=> {
        //throw new Error('Esto es un error')
        //console.log(respuesta) //json  convierto a objeto js
      // return respuesta
    // })
    // .then((resp) => setProductos(resp))
   //  .catch(err => console.log(err))
   //  .finally(()=> setLoading(false)) 
      
  // }
    
      
 // }, [categoriasId])
// todos coleccion
useEffect(()=>{
  const db = getFirestore()
  if (categoriasId){
    const queryColection = collection(db,'items')
    const queryFilter = query(queryColection, where('categoria','==',categoriasId))
    getDocs(queryFilter)
    .then(resp => setProductos( resp.docs.map(item => ({id: item.id, ...item.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false)) 
}else{
  const queryColection = collection(db,'items')
  getDocs(queryColection)
  .then(resp => setProductos( resp.docs.map(item => ({id: item.id, ...item.data()}))))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
}

},[categoriasId])

 
  
  
    const onAdd = (cant) => {
       console.log(cant) 
    }
// poner en console.log productos
  console.log(productos)
  return (
      // [1,2,3,4] => nuevo arra [<li>1</li>, ....]
      <>
      <div className="item">
      <h1>{ greeting }</h1>
            {   loading ? <h1>Cargando...</h1>
                :
                < Itemlist productos= {productos} />
                
            
                                         
            }
      </div>
            
           
        </>
    )}
export default ItemListContainer