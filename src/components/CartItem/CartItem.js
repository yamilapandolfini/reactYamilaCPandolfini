import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ product }) => {
    const { removeProduct } = useContext(CartContext)

    const handleRemove = () => {
        removeProduct(product.id)

    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {product?.name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {product?.quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${product?.price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${product?.price * product?.quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove()}>X</button>
            </footer>
        </article>
    )
}

export default CartItem