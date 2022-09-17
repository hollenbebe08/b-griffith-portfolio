import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';


function Portfolio(props) {

    const { currentProject} = props;
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
            <p>{currentProject.description}</p>
            <PhotoList project ={currentProject.name}/>
        </section>

    );
  }
  
  export default Portfolio;