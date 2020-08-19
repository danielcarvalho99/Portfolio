import React from 'react';
import './Header.css'

export default function Header(){

    return(
        <div className="container">
            <header>
                <nav className="navBar">
                    <ul>
                        <li><a href="#main">Sobre</a></li>
                        <li><a href="#technologies">Tecnologias</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#footer"> Saiba mais</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )

}

    


