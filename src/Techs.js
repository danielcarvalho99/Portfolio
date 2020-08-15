import React from 'react';
import ReactIcon from './Images/reactIcon.png';
import NodejsIcon from './Images/nodejsIcon.png';
import PythonIcon from './Images/python.png'
import './Techs.css';

export default function Techs(){

return(

    <div>
        <h2>Tecnologias</h2>

        <div className="techs">
            <img id="react"src={ReactIcon} alt="React"/>
            <img id="node"src={NodejsIcon} alt="Node"/>
            <img id="python"src={PythonIcon} alt="Python"/>
        </div>
    </div>

);

}