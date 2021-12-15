import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav className="navBar">
            <div className="Categories">
            <Link to={'/'} className='Option'>SomosAire</Link>
            <Link to={'/vestido'} className='Option'>Vestidos</Link>
            <Link to={'/blusa'} className='Option'>Blusas</Link>
            <Link to={'/camisa'} className='Option'>Camisas</Link>
            <Link to={'/remera'} className='Option'>Remeras</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default NavBar;
