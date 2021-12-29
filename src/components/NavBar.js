import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { getCategories } from '../components/products';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../components/CartContext';

const NavBar = () =>{

    const {getCantidad} = useContext(CartContext);
    
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(categories => {
            setCategories(categories)
        })
    },[])

    return(
        <nav className="navBar">
            <div className="title">
                <Link to={'/'}><h4>SomosAire</h4></Link>
            </div>
            
            <div className="Categories">
                {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
            </div>
            <div style ={{position: "absolute", right: "20px"}}> 
                <Link to = "/cart"><CartWidget/></Link>
                <div 
                style={{
                    height: '22px', width: '22px', borderRadius: "10px", backgroundColor: "red",
                    position: "absolute", top: "-8px", right: "-10px", textAlign: "center", alignItems: "center"
                }}>
                <span style={{
                    color: 'white',
                }}>{getCantidad()}</span>
                </div>
            </div>
        </nav>
        
    )
}

export default NavBar;
