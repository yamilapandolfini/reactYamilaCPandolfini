import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import { getProductById } from '../components/products';
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css';



const ItemDetailContainer = () => {

  const [product, setProduct] = useState()
  const { paramId } = useParams()
  console.log(paramId)
  useEffect(() => {
      getProductById(paramId).then(item => {
          setProduct(item)
      }).catch(err  => {
          console.log(err)
      })

      return (() => {
          setProduct()
      })

  }, [paramId])


  return (
      <div className="ItemDetailContainer">
        <ItemDetail product={product}/>

      </div>
    
  )
}

export default ItemDetailContainer;