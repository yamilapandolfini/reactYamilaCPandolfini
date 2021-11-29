import Button from '@restart/ui/esm/Button';
import React from 'react';
import ItemCount from '../components/ItemCount';

function ItemListContainer() {
 
  return (
    <div className="ItemListContainer">
      
      <a ClassName="logo" href="#home"><img src="favicon.ico" alt="logo"/></a>
      <ItemCount />
      <button>Agregar al carrito</button>

    </div>
    
    
  );
}

export default ItemListContainer;

