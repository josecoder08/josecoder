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
  

    const vaciarCart =()=>{
       setcartlist([])
    }
  return (
    <CartContext.Provider value={{
        cartlist,
        agregarCart,
        vaciarCart
    }}>
        {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider