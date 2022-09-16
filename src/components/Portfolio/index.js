import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/projects/0.jpg';

function Portfolio(props){

    const currentProject = {
        name: "projects",
    };
    
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
};

export default Portfolio;