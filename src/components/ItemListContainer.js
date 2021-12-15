import React from 'react';
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { getProducts, getCategories} from '../components/products';




const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { category } = useParams()


  useEffect( ()=> { 

    ( async () => {

      if (category !== undefined){

          const products = await getCategories(category);
          setProducts(products)

      } else {
        console.log("estoy aca")
          const products = await getProducts()
          console.log(category)
          setProducts(products)

      }
    })()

  }, [category])


 
  return (
      <div className="ItemListContainer">
        <ItemList products={products}/>

      </div>
    
    
  )
}

export default ItemListContainer;

