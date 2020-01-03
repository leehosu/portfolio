import React from 'react';
import gitLogo from './gitLogo.svg';
import './ExperienceItem.css';

const ExperienceItem = ({date,title,stack,contents, url}) => {

  return (
    <>
      <div className="Experience-timeline">
        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <a href = {url} >
            <img src={gitLogo} alt="git" className="gitIcon" />
            </a>
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">{date}</span>
            <div className="vtimeline-content">
              <h3>{title}</h3>
              <h4>{stack}</h4>
              <p>
                {contents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceItem;