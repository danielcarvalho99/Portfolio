import React from 'react';
import Profile from './Images/perfil.jpeg'
import './Main.css';

export default function Main(){

return(
    
    <div className="main">
        <img id="profile" src ={Profile} alt="Foto do Perfil"/>
        <p>
            Meu nome é Daniel Carvalho, sou estudante de engenharia elétrica da USP e apaixonado
            por programação. Meus principais projetos estão relacionados ao desenvolvimento web, 
            utilizando React para o front-end e Node.js para o back-end.
        </p>
    </div>
    );

}
