import React from 'react';
import './Projects.css';
import ProjectsData from './ProjectsData';
import ProjectsItem from './ProjectsItem';

export default function project(){

const projetos = ProjectsData.map(
    item => <ProjectsItem
            name={item.name}
            image={item.image}
            description={item.description}
            />)

return(

       <div id="projects">
           <h2>Projetos</h2>
           <div id="projectSpace">
                {projetos}
           </div>
       </div>
        
        );
}