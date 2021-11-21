import React from 'react';

function ItemListContainer() {
  const greeting = () => {
    alert("Hola, Como estas?");
  }

  return (
    <button onClick={greeting}>Saludo</button>
  );
}

export default ItemListContainer;

