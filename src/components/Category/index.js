import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';


function Category(props) {

    const { currentCategory} = props;
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <PhotoList category ={currentCategory.name}/>
        </section>

    );
}
  
export default Category;