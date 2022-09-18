import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Category from './components/Category';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: "About"
    },
    { 
      name: "Portfolio"
    },
    {
      name: "Resume"
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <section>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation>
      </section>
      <main>
        <div>
          {/* if contact tab is not selected then show corresponding category*/}
          {!contactSelected ? (
            //  the <> and </> are React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>.
            <>
            <Category currentCategory={currentCategory}></Category>
            </>
          // the ):( is the same as an else statement
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
