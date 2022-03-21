import {  useState, useContext} from "react";
import { createContext } from "react";

export const CartContext = createContext([])

export const useCartContext =() => useContext(CartContext)



function CartContextProvider({children}) {
    const [cartlist,setcartlist] = useState ([])
    const agregarCart=(item)=>{
        setcartlist([...cartlist,item])
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