import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';

import WigglesImage from '../images/WigglesImage.png';
import Solpoint from '../images/Solpoint.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>
        My <b>Projects</b>
      </h1>
      <div className='project'>
        <ProjectBox
          projectPhoto={Solpoint}
          projectName='Solpoint'
        />
        <ProjectBox
          projectPhoto={WigglesImage}
          projectName='Wiggles'
        />
        <ProjectBox
          projectPhoto={NewsletterImage}
          projectName='Newsletter'
        />
        <ProjectBox
          projectPhoto={RogfreeImage}
          projectName='RogFree'
        />
      </div>
    </div>
  );
};

export default Projects;
