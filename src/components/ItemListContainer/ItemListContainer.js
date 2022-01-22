import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts} from '../../products';
import './ItemListContainer.css';




const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()


  useEffect( ()=> { 

    getProducts(categoryId).then(item =>{
      setProducts(item)
    }).catch(err=>{
      console.log(err)
    })

    return(()=>{
      setProducts([])
    })

  }, [categoryId])


 
  return (
      <div className="ItemListContainer">
        <ItemList products={products}/>

      </div>
    
    
  )
}

export default ItemListContainer;

