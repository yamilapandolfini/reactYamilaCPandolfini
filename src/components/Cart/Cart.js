import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

    const {cart} = useContext (CartContext);

    return (
        <table class="table table-striped" className='detalle'>
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col"><button>Vaciar Carrito</button></th>

                </tr>
            </thead>
            <tbody>
            {cart.map(producto => {
                        return <tr>
                            <td> <img src={producto.item.priceUrl} /></td>
                            <td> {producto.item.name} </td>
                            <td> {producto.cantidad} </td>
                            <td> {producto.item.price}</td>
                            <td> <button>Eliminar producto</button> </td>
                            
                        </tr>
                        
            })}
            </tbody>
        </table>
    )
}

export default Cart;