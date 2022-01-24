import {useState, useContext, useEffect} from 'react'
import CartContext from '../../context/CartContext'

const ItemCount = ({product, onAdd})=> {
   const [quantity, setQuantity] = useState(0)
   const { isInCart, getProduct } = useContext(CartContext)

   useEffect(() => {
       if(isInCart(product.id)) {
          const oldQuantity = getProduct(product.id)?.quantity
          setQuantity(oldQuantity)
       }
       return(() => {
           setQuantity(0)
       })
   }, [product, getProduct, isInCart])

   const increment = () => {
       if(quantity < product.stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div align="center">          
           <table >
               <tbody>
                   <tr>
                       <td align="left"><button className="Button" onClick={()=> decrement() }>-</button></td>
                       <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                       <td align="right"><button className="Button" onClick={() => increment() }>+</button></td>
                   </tr>
                   <tr>
                       <td align="center" colSpan="5"><button className="Button" onClick={()=>onAdd(quantity)}>Agregar al carrito</button></td>
                   </tr>

               </tbody>
           </table>       
       </div>
   )

}
export default ItemCount
