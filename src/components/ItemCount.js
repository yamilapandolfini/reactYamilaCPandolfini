import React, {useState} from 'react';


const ItemCount = ({onAdd,stock,initial}) => {

    const [count, setCount] = useState(parseInt(initial));

    const handleIncrementar = () =>{
        if(count <= stock-1)
        setCount(count + 1);
    }

    const handleDecrementar = () =>{
        if (count>1)
        setCount(count - 1);
    }

    return(
         <div className = "itemCount">
             <button onClick={handleDecrementar}>-</button>
             <span>{count}</span>
             <button onClick={handleIncrementar}>+</button>
             <div>
                 <button onClick={onAdd}>Agregar al carrito</button>
             </div>
         </div>
     )
}

export default ItemCount
