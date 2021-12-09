import './itemcustom.css'

const ItemDetail = ({itemprod})=>{
    return(
        <div className="item-card-1">
        <div className="item-card-1 card">
            <div className="card-body">
                <h4 className="card-title">{itemprod.name}</h4>
                <img className="card-img-top-1" src={itemprod.priceUrl} alt={itemprod.name} />
                <h2 className="card-subtitle mb-2 text-muted">{itemprod.description}</h2>
                <p className="text-justify" style={{fontSize: '14px'}}>Precio:{itemprod.price}</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;