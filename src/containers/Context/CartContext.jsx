import {  useState, useContext} from "react";
import { createContext } from "react";
import { productos } from "../../helpers/getFetch";

export const CartContext = createContext([])

export const useCartContext =() => useContext(CartContext)



function CartContextProvider({children}) {
    const [cartlist,setcartlist] = useState ([])
    const isInCart = (id) => cartlist.find((prod) => prod.id === id)
    const agregarCart=(product,item)=>{
      
      const newCart = [...cartlist]

      const productIsInCart = isInCart(product.id)
  
      if (productIsInCart) {
        newCart[
          newCart.findIndex((prod) => prod.id === productIsInCart.id)
        ].quantity += item
  
        setcartlist(newCart)
        return
      }
  
      product.quantity = item
      
        setcartlist([...cartlist,product])
    }
  
    const removeItem=(id)=>{
     setcartlist(cartlist.filter(item=>item.id !==id))
    }

    const cantidadTotalItem =()=>{
      return cartlist.reduce((acum,prod)=> acum +=prod.cantidad,0)
    }
    const precioTotal =()=>{
      return cartlist.reduce((acum,prod)=> acum +(prod.cantidad*prod.price),0)
    }

    const vaciarCart =()=>{
       setcartlist([])
    }
  return (
    <CartContext.Provider value={{
        cartlist,
        agregarCart,
        vaciarCart,
        removeItem,
        cantidadTotalItem,
        precioTotal
    }}>
        {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider