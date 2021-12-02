import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { getProducts } from '../components/products';



const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      const list = getProducts()
      list.then(list =>{
          setProducts(list)
      })
      return (() => {
          setProducts([])
      })
  }, [])
 
  return (
      <div className="ItemListContainer">
        <ItemList products={products}/>

      </div>
    
    
  )
}

export default ItemListContainer;

