import Item from '../components/item';

const ItemList = ({products})=>{

    return(
        
        <ul className="ListGroup">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </ul>
            
        
    )
    
}

export default ItemList;