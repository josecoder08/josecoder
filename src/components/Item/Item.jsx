
import{ Link } from 'react-router-dom'
import '../Item/item.css'

function Item({prod}) {
  return (
    <div 
                                            key={prod.id}
                                            className='col-md-8' 
                                        >                        
                                            <div className="card w-100 mt-5" >
                                                <div  className="card-header" className="align">
                                                    {`${prod.name} - ${prod.categoria}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' className='w-50' />
                                                    {prod.price}                                                            
                                                </div>
                                                <div className="card-footer">
                                                
                                                    <Link to={`/detalle/${prod.id}`}>
                                                        <button className="btn btn-outline-primary btn-block" className="align">
                                                            detalle del producto
                                                        </button>                                              
                                                        </Link>

                                                </div>

                                            </div>
                                        
                                        </div>

                                        
        
  )
  
}



export default Item