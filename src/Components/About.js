import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Mark Francis.</b> I'm a <b>Frontend Engineer </b>
            who is skilled at using modern web technologies to craft exquisite
            web experiences. I also pay attention to detail, so I am great at
            translating designs to code pixel-perfectly.
            <br />
            <br />
            I have participated in HNG Internship where I built projects.
            Currently, I am improving my skills at ALtschool Africa where I am
            learning Frontend Engineering.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className='illustration'
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
      </div>
    </>
  );
};

export default About;
