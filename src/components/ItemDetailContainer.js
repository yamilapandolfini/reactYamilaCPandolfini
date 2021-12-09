import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import { getItem } from '../components/products';



const ItemDetailContainer = () => {

  const [itemprod, setItemprod] = useState([])

  useEffect(() => {
    const item = getItem()
    console.log("item")
    console.log(itemprod)
    item.then(list =>{
        setItemprod(list)
        console.log(itemprod)
    })
    return (() => {
        setItemprod([])
    })
}, [])

  return (
      <div className="ItemDetailContainer">
        <ItemDetail itemprod={itemprod}/>

      </div>
    
  )
}

export default ItemDetailContainer;