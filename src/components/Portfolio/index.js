import React from 'react'
import catastrophic from '../../assets/projects/0.jpg'
import readMeGenerator from '../../assets/projects/1.jpg'
import socialNetwork from '../../assets/projects/2.jpg'
import quizinator from '../../assets/projects/3.jpg'
import rentARide from '../../assets/projects/4.jpg'
import weatherDashboard from '../../assets/projects/5.jpg'


const Portfolio= () => {
  return (
    <section className="section flex-wrap">
      <h1 className="title project-title ">Click on images to view the projects</h1>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/project-catastrophic/"><img src={catastrophic} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered">Catastrophic</h1>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/professional-readme-generator/"><img src={readMeGenerator} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered">ReadMe Generator</h1>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/social-network"><img src={socialNetwork} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered">Social Network</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/b-griffith-quizinator/"><img src={quizinator} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered">Quizinator</h1>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <a href="https://github.com/PGCranford/Rent-A-Ride-/"><img src={rentARide} alt="bio"/></a>
                <h1 className="card-header-title is-centered">Rent-A-Ride</h1>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/b-griffith-weather-dashboard/"><img src={weatherDashboard} alt="bio"/></a>
                <h1 className="card-header-title is-centered">Weather Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
