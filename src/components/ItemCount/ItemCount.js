import {useState} from 'react';
import './itemCount.css';


const ItemCount = ({onAdd,stock,initial=1}) => {

    const [count, setCount] = useState(initial);

    const handleIncrementar = () =>{
        if(count < stock)
        setCount(count + 1);
    }

    const handleDecrementar = () =>{
        if (count>1)
        setCount(count - 1);
    }

    return(
        
        <div className = "itemCountContainer">

            <button onClick = {handleDecrementar}>-</button>
            <span>{count}</span>
            <button onClick = {handleIncrementar}>+</button>
            <button onClick={() => onAdd(count)}> Agregar al carrito </button>

        </div>
     )
}

export default ItemCount
