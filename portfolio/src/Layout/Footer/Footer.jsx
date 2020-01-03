import React from 'react';
import './Footer.css';
import gitLogo from './githubIcon.png';
import facebookLogo from './facebookIcon.png';

const Footer = () => {

  return (
    <div className= "footer">
      <div className="container">
        <div className="copyright">
          <p>Copyright © 2020 <br />
          Lee Hosu 010-4224-4549 <br />
          
          </p>
          </div>
          <div className="social">
                <a href="https://github.com/leehosu">
                  <img src = {gitLogo} alt = "github" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/hosu1128">
                  <img src = {facebookLogo} alt ="facebook" className="social-icon" />
                </a>
            </div>
        </div>
      </div>
  )
};

export default Footer;