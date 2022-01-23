import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import CartContext from '../../context/CartContext';
import { db } from '../../services/firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () =>{

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        (async () => {
            try {
              const querySnapshot = await getDocs(collection(db, 'categories'))
              const categories = querySnapshot.docs.map(doc => {
                  return { id: doc.id, ...doc.data() }
              })
              console.log(categories)
              setCategories(categories)
            } catch (error) {
              console.log('Error searching categories:', error)
            }     
          })()
    },[])

    return(
        <nav className="navBar">
            <div className="title">
                <Link to={'/'}><h3>SomosAire</h3></Link>
            </div>
            
            <div className="Categories">
                {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
            </div>
            <div className="cart"> 
                <Link to = "/cart"><CartWidget/></Link>
                
            </div>
        </nav>
        
    )
}

export default NavBar;
