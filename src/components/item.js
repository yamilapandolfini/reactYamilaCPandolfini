import './item.css'

const Item = ({product}) =>{

    return(
        <div className="item-card">
        <div className="item-card card">
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <img className="card-img-top" src={product.priceUrl} alt={product.name} />
                <p className="text-justify" style={{fontSize: '14px'}}>Precio:{product.price}</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
        </div>
    );

}

export default Item;