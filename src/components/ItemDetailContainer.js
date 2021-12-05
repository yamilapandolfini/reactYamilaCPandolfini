import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import { getItem } from '../components/products';



const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const item = getItem()
    item.then(list =>{
        setProducts(list)
    })
    return (() => {
        setProducts([])
    })
}, [])

console.log(products);

  return (
      <div className="ItemDetailContainer">
        <ItemDetail products={products}/>

      </div>
    
  )
}

export default ItemDetailContainer;