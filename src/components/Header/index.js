import React from 'react';
import Navigation from '../Navigation';

function Header(){
    return(
        <header className="page-header">
            <div>
                <h1>Betsy Griffith</h1>
            </div>
            <div>
                <Navigation/>
            </div>
        </header>
    );
};

export default Header;