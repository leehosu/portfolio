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
          <span className="education-date">Marth 2013 - February 2020</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>
            컴퓨터공학부 학사로 2020년 2월에 졸업하였으며, Computer Vision Lab과 Software Engineering Lab에서 연구활동을 하였고
            특히, Computer Vision 연구실에서는 학생 연구실장을 맡아 학우들을 지도하였습니다. 또, 교수님과 전공 소학회를 진행한 경험이 있고 3,4 학년때 2,3학년들을 대상으로 JAVA, Web Programing tutering을 진행한 경험이 있습니다.
            그리고 교내에서 진행하는 해커톤 대회에서 은상, 졸업 작품 금상을 받은 수상 경력도 있습니다.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Education;