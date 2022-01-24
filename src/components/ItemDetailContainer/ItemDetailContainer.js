import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'
import './ItemDetailContainer.css'
import { CircularProgress } from '@material-ui/core';


const ItemDetailContainer = () => {

  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  const { paramId } = useParams()

  useEffect(() => {
    setLoading(true)
    getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product)
    }).catch((error) => {
        console.log('Error searching item', error)
    }).finally(() => {
        setLoading(false)
    })

      return (() => {
          setProduct()
      })

  }, [paramId])


  return (
      <div className="ItemDetailContainer">
 
        {loading ? <CircularProgress /> : <ItemDetail  product={product} /> }

      </div>
    
  )
}

export default ItemDetailContainer