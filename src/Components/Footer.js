import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <h4>
        Developed by <b>Mark Francis</b> using opensource template from
        <a
          href='https://github.com/DevanshSahni'
          target='_blank'
        >
          Devansh Sahni
        </a>
      </h4>
      <h4>Copyright &copy; 2026</h4>
      <div className='footerLinks'>
        <a
          href='https://github.com/frankosivue'
          target='_blank'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/devansh-sahni/'
          target='_blank'
        >
          <FaLinkedin />
        </a>
        <a
          href='mailTo:markfranksive@gmail.com'
          target='_blank'
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
