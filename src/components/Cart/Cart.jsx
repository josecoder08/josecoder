import { useCartContext } from "../../containers/Context/CartContext"
import { Link } from "react-router-dom"


function Cart() {
    const {cartlist,vaciarCart,removeItem,precioTotal} = useCartContext()
    console.log(cartlist)
    cartlist.forEach((item) => {
		console.log(item)
	})

	let total = 0

	for (let i = 0; i < cartlist.length; i++) {
		let price = cartlist[i].price* cartlist[i].cantidad

		total += price}
    return(
        <div>
           <div>
            {cartlist.length === 0 && (
						<>
							<h3>Parece que no hay productos en el carrito,</h3>
							<Link
								to="/" 
								className="btn bg-principal text-white d-block w-100 mt-3 fw-bolder fs-5"	
							>
								<i className="ps-3 fas fa-smile-wink fs-5"></i>
								<button onClick={"/"}>ir al mercado</button>
							</Link>
						</>
					)}
            </div> 
            cart
           { cartlist.map (item=> <>
		                         <li key={item.id}>
			                       Nombre:{item.name} Precio:{item.price} Cantidad:{item.cantidad}
			                     </li>
								 <button onClick={()=>removeItem(item.id)}>eliminar item</button><hr />
								 </>
						  ) 
		   }
           <button onClick={vaciarCart}>vaciar Cart</button>
           <h3>Total a pagar: ${total}</h3>
		   
            </div>
            
    )
    
    }
    
export default  Cart