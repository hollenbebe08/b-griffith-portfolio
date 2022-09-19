import React from 'react'
import catastrophic from '../../assets/projects/0.jpg'
import readMeGenerator from '../../assets/projects/1.jpg'
import socialNetwork from '../../assets/projects/2.jpg'
import quizinator from '../../assets/projects/3.jpg'
import rentARide from '../../assets/projects/4.jpg'
import weatherDashboard from '../../assets/projects/5.jpg'
import placeholder from '../../assets/projects/6.jpg'

const Portfolio= () => {
  return (
    <section className="flex-row">
      <div>
        <a href="https://github.com/hollenbebe08/project-catastrophic/"><img src={catastrophic} alt="bio"/></a>
        <h1>Catastrophic</h1>
      </div>
      <div>
        <a href="https://github.com/hollenbebe08/professional-readme-generator/"><img src={readMeGenerator} alt="bio"/></a>
        <h1>ReadMe Generator</h1>
      </div>
      <div>
        <a href="https://github.com/hollenbebe08/social-network"><img src={socialNetwork} alt="bio"/></a>
        <h1>Social Network - Insomnia</h1>
      </div>
      <div>
        <a href="https://github.com/hollenbebe08/b-griffith-quizinator/"><img src={quizinator} alt="bio"/></a>
        <h1>Quizinator</h1>
      </div>
      <div>
        <a href="https://github.com/PGCranford/Rent-A-Ride-/"><img src={rentARide} alt="bio"/></a>
        <h1>Rent-A-Ride</h1>
      </div>
      <div>
        <a href="https://github.com/hollenbebe08/b-griffith-weather-dashboard/"><img src={weatherDashboard} alt="bio"/></a>
        <h1>Weather Dashboard</h1>
      </div>
      <div>
        <a href="https://hollenbebe08.github.io/project-catastrophic/"><img src={placeholder} alt="bio"/></a>
        <h1>Placeholder</h1>
      </div>
    </section>
  );
};

export default Portfolio;
