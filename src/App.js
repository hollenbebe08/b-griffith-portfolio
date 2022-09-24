import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';


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
    }
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
          {(() => {
            console.log(currentCategory)
              switch (currentCategory.name) {
                case "About":
                  return <About />
                case "Contact":
                  return <ContactForm />
                case "Resume":
                  return <Resume />
                case "Portfolio":
                  return <Portfolio />
                default:
                  return "link not found"
              }
            }) ()
          }
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
