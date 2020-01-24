import React from 'react';
import { Element } from "react-scroll";
import './Skills.css';

const Skills = () => {
  return (
    <Element className="contents-Skills" name="skills">
      <h2 className="Skills-heading">Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>React.JS</li>
        <li>Redux.JS</li>
        <li>JAVA</li>
        <li>C</li>
        <li>C++</li>
        <li>Spring</li>
        <li>JSP</li>
        <li>JDBC</li>
        <li>MySQL</li>
        <li>MariaDB</li>
        <li>R</li>
        <li>Linux</li>
        <li>Git & Github</li>
        <li>Notion</li>
        <li>Slack</li>
      </ul>
    </Element>
  );
};

export default Skills;