import React from 'react';
import './About.css';
import {
  Element,
} from "react-scroll";


const About = () => {

  return (
    <Element className="contents-about" name="about">
      <div className="About-box">
        <div className="About-me">
          <h2 className="About-heading">About ME</h2>
        </div>
        <div className="About-text">
          <p>
            Web Front-End 개발자로 취업을 희망하고 있으며 <br />
            경험있는 언어로는 JavaScript, TypeScript, C, C++, JAVA, Python이고,{" "}
            <br />
            경험 라이브러리로는 react.js 입니다. <br />
            현재 Front-end 프로젝트를 진행중이며 level-up하는데 있어 <br />
            경험을 중요시하고 있어 새로운 기술 공부를 꾸준히 하고 있습니다.
            <br />
          </p>
        </div>
      </div>
    </Element>
  );
}

export default About;