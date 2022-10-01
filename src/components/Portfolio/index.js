import React from 'react'
import catastrophic from '../../assets/projects/0.jpg'
import readMeGenerator from '../../assets/projects/1.jpg'
import socialNetwork from '../../assets/projects/2.jpg'
import quizinator from '../../assets/projects/3.jpg'
import rentARide from '../../assets/projects/4.jpg'
import weatherDashboard from '../../assets/projects/5.jpg'


const Portfolio= () => {
  return (
    <section className="section flex-wrap is-three-quarters-mobile">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-child box">
              <h1 className="has-text-dark has-text-centered">Click on Image to view Repo</h1>
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/project-catastrophic/"><img src={catastrophic} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered is-size-5"><a href="https://hollenbebe08.github.io/project-catastrophic/">View Project</a></h1>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <h1 className="has-text-dark has-text-centered">Click on Image to view Repo</h1>
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/professional-readme-generator/"><img src={readMeGenerator} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered is-size-5"><a href="https://drive.google.com/file/d/1UGBjCzJ9XW9oKxhIG094NQ1dstBMSdAF/view">View Project</a></h1>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <h1 className="has-text-dark has-text-centered">Click on Image to view Repo</h1>  
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/social-network"><img src={socialNetwork} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered is-size-5"><a href="https://drive.google.com/file/d/1OLd9s9hgNB6lp5CALm2kkO6pY01htTNp/view">View Project</a></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-child box">
              <h1 className="has-text-dark has-text-centered">Click on Image to view Repo</h1>
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/b-griffith-quizinator/"><img src={quizinator} alt="bio"/></a>
              </div>
              <h1 className="card-header-title is-centered is-size-5"><a href="https://hollenbebe08.github.io/b-griffith-quizinator/">View Project</a></h1>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <div className="card-image">
                <h1 className="has-text-dark has-text-centered">Click on Image to view Repo</h1>
                <a href="https://github.com/PGCranford/Rent-A-Ride-/"><img src={rentARide} alt="bio"/></a>
                <h1 className="card-header-title is-centered is-size-5"><a href="https://sleepy-cove-56868.herokuapp.com/">View Project</a></h1>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card is-child box">
              <h1 className="has-text-dark has-text-centered">Click on Image to view Repo</h1>
              <div className="card-image">
                <a href="https://github.com/hollenbebe08/b-griffith-weather-dashboard/"><img src={weatherDashboard} alt="bio"/></a>
                <h1 className="card-header-title is-centered is-size-5"><a href="https://hollenbebe08.github.io/b-griffith-weather-dashboard/">View Project</a></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
