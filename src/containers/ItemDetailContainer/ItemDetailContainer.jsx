import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDitail/ItemDetail'
import getFetch from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const {detalleId}= useParams()
    console.log(detalleId)

    useEffect(() => {
       getFetch
       .then(resp => setproducto(resp.find(prod=>prod.id === detalleId)))
    }, [])
  return (
    <>
    <ItemDetail producto={producto} />
    </>

   )

  }
export default ItemDetailContainer