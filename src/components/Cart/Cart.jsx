import { useCartContext } from "../../containers/Context/CartContext"



function Cart() {
    const {cartlist,vaciarCart} = useCartContext()
    console.log(cartlist)
    return(
        <div>
            cart
           { cartlist.map (item=> <li>Nombre:{item.name} Precio:{item.price} Cantidad:{item.cantidad}</li>) }
           <button onClick={vaciarCart}>vaciar Cart</button>
            </div>
    )
    
    }
    
export default  Cart