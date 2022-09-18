import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Category from './components/Category';

function App() {
  const [categories] = useState([
    {
      name: "About"
    },
    {
      name: "Contact"
    },
    { 
      name: "Portfolio"
    },
    {
      name: "Resume"
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <section>
          <Navigation
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          ></Navigation>
      </section>
      <main>
        <div>
          <Category currentCategory={currentCategory}></Category>
        </div>
      </main>
    </div>
  );
};

export default App;
