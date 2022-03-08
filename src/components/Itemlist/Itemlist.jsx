import Item from "../Item/Item"


const Itemlist = ({productos}) => {
  return (
    productos.map((prod) => <Item prod ={prod}/> )
  )
}

export default Itemlist