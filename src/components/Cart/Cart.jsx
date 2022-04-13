import { useState } from "react"
import { useCartContext } from "../../containers/Context/CartContext"
import { Link } from "react-router-dom"
import { 
	addDoc, 
	collection, 
	getFirestore, 
	
  } from "firebase/firestore"
import '../Cart/Cart.css';

function Cart() {
	const [dataForm, setDataForm] = useState({
		email: '', name: '', phone: ''
	  })
	  const [id, setId] = useState('')
    const {cartlist,vaciarCart,removeItem,precioTotal} = useCartContext()

	// fucntion {}
    const generarOrden= async (e)=>{
		e.preventDefault();
		// Nuevo objeto de orders    
		let orden = {}      
  
		orden.buyer = dataForm
		orden.total = precioTotal();
  
		orden.items = cartlist.map(cartItem => {
			const id = cartItem.id;
			const nombre = cartItem.name;
			const precio = cartItem.price * cartItem.cantidad;
			return {id, nombre, precio}  
		})
		console.log(orden)
  
		// crear
  
		const db = getFirestore()
		const queryCollectionSet = collection(db, 'orders')
		addDoc(queryCollectionSet, orden)
		.then(resp => setId(resp.id))
		.catch(err => console.error(err))
		.finally(() => console.log('termino '))
	}


    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
    }


    console.log(dataForm)

    console.log(cartlist)
    cartlist.forEach((item) => {
		console.log(item)
	})

	let total = 0

	for (let i = 0; i < cartlist.length; i++) {
		let price = cartlist[i].price* cartlist[i].cantidad

		total += price}
    return(
        <div className="espacio"> 
           <div>
            {cartlist.length === 0 && (
						<>
							<h3>Parece que no hay productos en el carrito...</h3>
							<Link
								to="/" 
								className="btn bg-principal text-white d-block w-100 mt-3 fw-bolder fs-5"	
							>
								<i className="ps-3 fas fa-smile-wink fs-5"></i>
								<button onClick={"/"}>volver al mercado</button>
							</Link>
						</>
					)}
            </div> 
			
           { cartlist.map (item=> <>
		                         <li key={item.id}>
			                       Nombre:{item.name} Precio:{item.price} Cantidad:{item.cantidad}
			                     </li>
								 <img src={item.foto} alt='' className='w-25' />
								 <button onClick={()=>removeItem(item.id)}>eliminar item</button><hr />
								 </>
						  ) 
		   }
		    {cartlist.length !== 0 && (
				<>
           <button onClick={vaciarCart}>vaciar Cart</button>
           <h3>Total a pagar: ${total}</h3>
		   </>
		   )}

{cartlist.length !== 0 && (
				<>
		   <form 
                onSubmit={generarOrden}   
				            
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                {/* <button>Generar Orden</button> */}
				<br />
                <button>Terminar Compra</button>
            </form>
			  <br />
			{id.length !== '' && `el id de la compra es: ${id}`}
			</>
			 )}
			
            </div>
             
    )
	
    }
    
export default  Cart