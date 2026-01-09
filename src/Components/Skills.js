import React from 'react';
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiVercel } from 'react-icons/si';

const Skills = ({ skill }) => {
  const icon = {
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
  };

  return (
    <div
      title={skill}
      className='SkillBox'
    >
      {icon[skill]}
    </div>
  );
};

export default Skills;
