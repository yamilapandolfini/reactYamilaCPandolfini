import Button from '@restart/ui/esm/Button';
import React from 'react';
import ItemCount from '../components/ItemCount';

function ItemListContainer() {
 
  return (
    <div className="ItemListContainer">
      <a ClassName="logo" href="#home"><img src="favicon.ico" alt="logo"/></a>
      <ItemCount stock="5" initial="1"/>
    </div>
    
    
  );
}

export default ItemListContainer;

