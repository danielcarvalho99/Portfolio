import React from 'react';
import Profile from './Images/perfil.jpeg'
import './Main.css';

export default function Main(){

return(
    
    <div>
        <img id="profile" src ={Profile} alt="Foto do Perfil"/>
        <p>
            Meu nome é Daniel Carvalho, sou estudante de engenharia elétrica da USP e interessado
            por programação.
        </p>
    </div>
    );

}
