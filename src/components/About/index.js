import React from 'react'
import photo from '../../assets/small/about/betsy.jpg'

const About= () => {
  return (
    <section className="columns section is-three-quarters-mobile">
      <div className="column">
        <img src={photo} alt="bio"/>
      </div>
      <div className="column">
        <p className="bio">
        I am a Full Stack Developer that enjoys working with both front-end and back-end development. I most recently completed the UNCC Coding Bootcamp and would love to connect with you! Please feel free to preview my creations in the profile section. You can also view my Linkedin and GitHub profiles as well by clicking on the links in the footer.
        </p>
      </div>
    </section>
  );
};

export default About;
