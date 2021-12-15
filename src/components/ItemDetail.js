import ItemCount from './ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ product })=>{
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
            <ItemCount />         
            <footer className='ItemFooter'>
                <p>Agregar al carrito</p>
            </footer>
           
        </article>
        
    );
}

export default ItemDetail;