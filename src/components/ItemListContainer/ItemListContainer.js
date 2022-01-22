import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
// import { getProducts} from '../../products';
import { getProducts} from '../../services/firebase/firebase'
import './ItemListContainer.css';




const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect( ()=> { 

    // getProducts(categoryId).then(item =>{
    //   setProducts(item)
    // }).catch(err=>{
    //   console.log(err)
    // })

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
    return <h1>Loading...</h1>
  }
 
  return (
      <div className="ItemListContainer">
        <ItemList products={products}/>

      </div>
    
    
  )
}

export default ItemListContainer;

