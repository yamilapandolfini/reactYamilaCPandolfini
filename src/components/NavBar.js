import React from 'react';
import './NavBar.css';

const NavBar = () =>{
    return(
        <div className="topnav">
            <a ClassName="logo" href="#home"><img src="favicon.ico" alt="logo"/></a>
            <a className="active" href="#productos">Productos</a>
            <a href="#news">Novedades</a>
            <a href="#contact">Contactanos</a>
            <a href="#about">Sobre Nosotros</a>
        </div>
    )
}

export default NavBar;
