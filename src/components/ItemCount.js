import React, {useState} from 'react';


const ItemCount = () => {

    const [count, setCount] = useState(1);
    const [stock,setStock]= useState(5);

    const handleIncrementar = () =>{
        setCount(count + 1);
    }

    const handleDecrementar = () =>{
        setCount(count - 1);
    }

    if(count ===1){
        return (
            <div className = "itemCount">
                <button onClick={handleDecrementar}disabled>-</button>
                <span>{count}</span>
                <button onClick={handleIncrementar}>+</button>
            </div>
        )
    } else if (count <stock){
        return(
            <div className = "itemCount">
                <button onClick={handleDecrementar}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrementar}>+</button>
             
            </div>
        )
    } else if (count>=stock){
        return(
            <div className = "itemCount">
                <button onClick={handleDecrementar}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrementar}disabled>+</button>
            </div>
        )
    }
}

export default ItemCount
