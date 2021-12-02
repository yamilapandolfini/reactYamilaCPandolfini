import './item.css'

const Item = ({product}) =>{

    return(
        <div className="item-card">
        <div className="item-card card">
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <img className="card-img-top" src={product.priceUrl} alt={product.name} />
                <h6 className="card-subtitle mb-2 text-muted">{product.description}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>Precio:{product.price}</p>
                <button>ver detalle del producto</button>
            </div>
        </div>
        </div>
    );

}

export default Item;