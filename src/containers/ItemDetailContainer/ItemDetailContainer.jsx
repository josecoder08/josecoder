import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDitail/ItemDetail'
import {getDoc, getFirestore ,doc}from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const[loading,setLoading]= useState(true)
    const {detalleId}= useParams()
    console.log(detalleId)

    useEffect(()=>{
      const db = getFirestore()
      const queryDb= doc(db,'items',detalleId)
      getDoc(queryDb)
      .then(resp=> setproducto({id:resp.id,...resp.data()}))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    },[])

   // useEffect(() => {
     //  getFetch
     //  .then(resp => setproducto(resp.find(prod=>prod.id === detalleId)))
  //  }, [])
  return (
    <>
    <ItemDetail producto={producto} />
    </>

   )

  }
export default ItemDetailContainer