import React, { useState } from 'react';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Catastrophic',
      category: 'portfolio',
    },
    {
      name: 'Placeholder',
      category: 'portfolio',
    },
    {
    name: 'Placeholder',
    category: 'portfolio',
    },
    {
    name: 'Quizinator',
    category: 'portfolio',
    },
    {
    name: 'Rent-a-Ride',
    category: 'portfolio',
    },
    {
    name: 'Weather Dashboard',
    category: 'portfolio',
    },
    {
      name: 'Placeholder',
      category: 'portfolio',
    },
    {
      name: 'Profile picture',
      category: 'about',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
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