import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Navigation(props){

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return(
    <header className="hero is-small">
        <div className="hero-body">
            <h2 className="title">
                <a href="/">
                    <span role="img" aria-label="camera"> 👩‍💻</span> Betsy Griffith
                </a>
            </h2>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <ul className="navbar-item">
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                                currentCategory.name === category.name && !contactSelected && 'navActive'
                            }`} 
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                    setContactSelected(false);
                                }}
                                >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  )
};

export default Navigation;
