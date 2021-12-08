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

  return (
      <div className="ItemDetailContainer">
        <ItemDetail item={products}/>

      </div>
    
  )
}

export default ItemDetailContainer;