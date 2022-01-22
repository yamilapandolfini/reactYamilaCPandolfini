import Item from '../Item/Item';


const ItemList = ({ products = [] })=>{
    console.log("esto es un map")
    console.log(products)

    return(
        
        <ul className="ListGroup">
            {products.map(product =><Item key={product.id} product={product}/> )}
        </ul>
            
        
    )
    
}

export default ItemList;