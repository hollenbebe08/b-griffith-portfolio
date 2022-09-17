import React, { useState } from 'react';

const PhotoList = ({ project }) => {

  const [photos] = useState([
    {
      name: 'Catastrophic',
      project: 'portfolio',
      description: 'all about cats'
    },
    {
      name: 'Catastrophic',
      project: 'portfolio',
      description: 'all about cats'
    },
    {
      name: 'Catastrophic',
      project: 'portfolio',
      description: 'all about cats'
    },
    {
      name: 'Catastrophic',
      project: 'portfolio',
      description: 'all about cats'
    },
    {
      name: 'Catastrophic',
      project: 'portfolio',
      description: 'all about cats'
    }, 
  ]);

  const currentPhotos = photos.filter((photo) => photo.project === project);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${project}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  )
};

export default PhotoList;