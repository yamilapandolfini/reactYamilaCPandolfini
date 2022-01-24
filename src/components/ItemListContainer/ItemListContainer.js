import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts} from '../../services/firebase/firebase'
import './ItemListContainer.css';
import { CircularProgress } from '@material-ui/core';


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect( ()=> { 

      setLoading(true)
      getProducts('category', '==', categoryId).then(products => {
          setProducts(products)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })
    return(()=>{
      setProducts([])
    })

  }, [categoryId])

  if(loading) {
    return <CircularProgress />
  }
 
  return (
      <div className="ItemListContainer">
        <ItemList products={products}/>

      </div>
    
    
  )
}

export default ItemListContainer;

