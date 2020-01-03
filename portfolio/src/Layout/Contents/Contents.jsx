import React from 'react';
import About from '../../Component/About';
import Experience from '../../Component/Experience';
import Education from '../../Component/Education';
import Skills from '../../Component/Skills';

const Contents = () => {

  return(
    <div className= "contents">
      <About />
      <Experience />
      <Skills />
      <Education />
    </div>
  )
};

export default Contents;