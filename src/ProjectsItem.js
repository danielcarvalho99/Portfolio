import React from 'react';

export default function ProjectsItem(props){

return(

    <div className="projectItem">
        <h4>{props.name}</h4>
        <img id="projectImg"src={props.image} alt={props.name} />
        <p>{props.description}</p>
    </div>

);

}