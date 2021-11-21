import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () =>{
    return(
        <div className="topnav">
            <a ClassName="logo" href="#home"><img src="favicon.ico" alt="logo"/></a>
            <a className="active" href="#productos">Productos</a>
            <a href="#news">Novedades</a>
            <a href="#contact">Contactanos</a>
            <a href="#about">Sobre Nosotros</a>
            <CartWidget />
        </div>
    )
}

export default NavBar;
