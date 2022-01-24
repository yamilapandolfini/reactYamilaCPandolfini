
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    
    return(
        <Link to='/cart' className="CartWidget">
            <img src="cart.svg" alt='cart' className='CartImg'/>
            {getQuantity()}
        </Link> 
    )
}

export default CartWidget