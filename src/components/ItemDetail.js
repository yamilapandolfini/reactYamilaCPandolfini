import Item from '../components/item';

const ItemDetail = ({products = []})=>{
    return(
        <ul className="ItemGroup">
            {products.map(product => <Item key={product.id} item={product}/>)}
        </ul>     
    )
}

export default ItemDetail;