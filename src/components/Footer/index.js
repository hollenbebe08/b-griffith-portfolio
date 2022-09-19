import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div>
        <footer>
            <div id="div_top_hypers">
              <ul id="ul_top_hypers">
                <li>Let's Connect!</li>
                <li><SocialIcon url="https://github.com/hollenbebe08"/> GitHub Profile</li>
                <li><SocialIcon url="https://www.linkedin.com/in/betsy-griffith-aab52546/" /> LinkedIn Profile</li>
              </ul>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
