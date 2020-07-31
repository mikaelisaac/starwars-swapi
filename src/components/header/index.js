import React from 'react';

import './styles.css';
import Logo from '../../assets/img/logo-sw2.png';
 
function Header (){
    return(
        <header id="main-header">
            <a className="ButtonLink" href="/planets">Planetas</a>
            <a className="ButtonLink" href="/films">Filmes</a>
            <img href="/" className="Logo" src={Logo} alt="Star Wars"/>
            <a className="ButtonLink" href="/peoples">Personagens</a>
            <a className="ButtonLink" href="/">Naves</a>
            <a className="hamburguer">_</a>
        </header>
    )
};

export default Header;