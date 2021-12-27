import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { getCategories } from '../components/products';
import { useState, useEffect } from 'react';

const NavBar = () =>{
    
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
            <CartWidget />
        </nav>
        
    )
}

export default NavBar;
