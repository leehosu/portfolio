import React, { Component } from "react"
import {
  Link,
  } from "react-scroll";
import ReactDOM from 'react-dom';
import './Menu.css';

class Menu extends Component {


  render() {
    return (
      <div className="menu">
        <ul className="menu_list">
          <li className="menu_item">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
              About
          </Link>
          </li>
          <li className="menu_item">
            <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
              Experience
          </Link>
          </li>
          <li className="menu_item">
            <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
              Skills
          </Link>
          </li>
          <li className="menu_item">
            <Link to="education" spy={true} smooth={true} offset={50} duration={500}>
              Education
          </Link>
          </li>
        </ul>
      </div>
    )}
}


export default Menu;