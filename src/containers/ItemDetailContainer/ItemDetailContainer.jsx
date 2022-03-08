import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDitail/ItemDetail'
import getFetch from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})

    useEffect(() => {
       getFetch
       .then(resp => console.log(resp.find(prod=>prod.id === 1)))
    }, [])
  return (
    <>
    <ItemDetail producto={producto} />
    </>

   )

  }
export default ItemDetailContainer