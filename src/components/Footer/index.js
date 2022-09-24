import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <footer className="footer has-background-black">
        <div className="content">
            <div id="div_top_hypers">
              <ul id="ul_top_hypers">
                <li>Let's Connect!</li>
                <li><SocialIcon url="https://github.com/hollenbebe08"/> GitHub Profile</li>
                <li><SocialIcon url="https://www.linkedin.com/in/betsy-griffith-aab52546/" /> LinkedIn Profile</li>
                <li><SocialIcon url="https://stackoverflow.com/users/18714378/betsy-griffith" /> Stackoverflow</li>
              </ul>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
