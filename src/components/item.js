import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) =>{

    return(
        <div className="item-card">
        <div className="item-card card">
            <div className="card-body">
                <h4 className="card-title">{product?.name}</h4>
                <p className="Info">Categoria: {product?.category}</p>
                <img className="card-img-top" src={product?.priceUrl} alt={product.name} />
                <p className="text-justify" style={{fontSize: '14px'}}>Precio:{product?.price}</p>
                <Link className='ButtonDetail' to={`/detail/${product?.id}`}>Ver detalle</Link>
            </div>
        </div>
        </div>
    );

}

export default Item;