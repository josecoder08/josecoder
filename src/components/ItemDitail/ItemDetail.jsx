import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../containers/Context/CartContext"
import { productos } from "../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({producto}) => {
  const [count,setcount]= useState(null)

  const {agregarCart, cartlist}= useCartContext()
  const onAdd=cant=>{console.log(cant)
  setcount(cant)
  agregarCart({...producto,cantidad:cant})
}
console.log(cartlist)
  return (
    <div>
        {producto.name}
        {count ? 
              
          <Link to= '/Cart' >
          <button className='btn btn-outline-primary'>ir al cart</button>
          </Link>
          
        :
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      }

      

    </div>
  )
}

export default ItemDetail