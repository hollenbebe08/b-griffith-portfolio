import React from 'react'
import photo from '../../assets/small/about/betsy.jpg'
import { SocialIcon } from 'react-social-icons';

const About= () => {
  return (
    <article>
      <section className="columns">
        <div className="column">
          <img src={photo} alt="bio"/>
        </div>
        <div className="column">
          <p className="bio">
          I am a Full Stack Developer that enjoys working with both front-end and back-end development. I most recently completed the UNCC Coding Bootcamp and would love to connect with you! Please feel free to preview my creations in the profile section. You can also view my Linkedin and GitHub profiles as well by clicking on the links below.
          </p>
        </div>
      </section>
      <section className='columns'>
        <div className="column">
          <div id="div_top_hypers">
            <h2 className='lets-connect has-text-centered is-size-2-desktop is-size-5-mobile'>Let's Connect!</h2>
              <ul className="has-text-centered is-size-6-mobile" id="ul_top_hypers">
                <li><SocialIcon url="https://github.com/hollenbebe08"/> GitHub Profile</li>
                <li><SocialIcon url="https://www.linkedin.com/in/betsy-griffith-aab52546/" /> LinkedIn Profile</li>
                <li><SocialIcon url="https://stackoverflow.com/users/18714378/betsy-griffith" /> Stack Overflow</li>
              </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
