import React from 'react';
import { Element } from "react-scroll";
import './Education.css';
import logo from './hanshin.jpg';


const Education = () => {

  return (
    <Element className="contents-Education" name="education">
      <h2 className="Education-heading">Education</h2>
      <div className="Education-block">
        <div className="Education-univImg">
          <img src={logo} alt="hanshin_logo" className="logo" />
        </div>
        <div className="Education-contents">
          <h3>Hanshin University</h3>
          <span className="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec
            nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur
            libero. Morbi dapibus porta quam laoreet placerat.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Education;