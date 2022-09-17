import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  const [projects] = useState([
    { 
      name: "Portfolio"
    },
    {
      name: "Resume"
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      ></Nav>
      <main>
        <div>
          <Portfolio currentProject={currentProject}></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
};

export default App;
