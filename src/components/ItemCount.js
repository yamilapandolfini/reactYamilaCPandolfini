import {useState} from 'react';


const ItemCount = ({onAdd,stock=0,initial=0}) => {

    const [count, setCount] = useState(parseInt(initial));

    const handleIncrementar = () =>{
        if(count <= stock)
        setCount(count + 1);
    }

    const handleDecrementar = () =>{
        if (count>0)
        setCount(count - 1);
    }

    return(
        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="Button" onClick={()=> handleDecrementar() }>-</button></td>
                        <td align="center" style={{fontSize : '20px'}}>{count}</td>
                        <td align="right"><button className="Button" onClick={() => handleIncrementar() }>+</button></td>
                    </tr>
                </tbody>
            </table>       
        </div>
     )
}

export default ItemCount
