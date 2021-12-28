import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ product })=>{

    const [compra, setCompra] = useState(false);
    const [qty, setQty] = useState(0);
    
    const handleCompra = (qty) =>{
        setCompra(true);
        setQty(qty);
    }

    const handleComprando = () =>{
        console.log("agregar");
    }

    return(
        <article className="CardItem">
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
                    Precio: {product?.price}
                </p>
            </section>
            <div>
                {!compra ?
                    <ItemCount stock = {10} onAdd = {(qty) => handleCompra (qty)} />
                    :
                    <Link to= "/cart"><button className='ItemFooter' onClick = {handleComprando}>Agregar</button></Link>
                }
            </div>
            
            <Link className='ButtonDetail' to={'/'}>Ver todos los productos</Link>
        
        </article>
        
    );
}

export default ItemDetail;