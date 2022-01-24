import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ product })=>{

    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const addToCart = (quantity) => {
        setQuantity(quantity)
        addItem(product, quantity)
    }


    return (
        <article className='CardItem'>
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
            </header>
            <picture>
                <img src={product?.priceUrl} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
                <p className="Info">
                    Descripción: {product?.description}
                </p>
                <p className="Info">
                    Precio: ${product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantity === 0 
                    ?   <ItemCount product={product} onAdd={addToCart} />
                    :   <Link to='/cart' className='Option'>Ir al carrito</Link>
                }
            </footer>
        </article>
    );
}

export default ItemDetail;