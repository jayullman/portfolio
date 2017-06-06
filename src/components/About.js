import React from 'react';
import '../styles/about.scss';

import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
  return (
    <section className='about'>
      <ScrollableAnchor id='about'>
        <h3>&#60; About Me /&#62;</h3>
      </ScrollableAnchor>
      <div className="blurb">
        <p>
          Hello, my name is Jay. I am based out of Portland, OR, and I am currently pursuing my
          first job as a web developer. I love learning and solving problems.
        </p>
        <p>
        When I'm not taking a deep dive into the inner workings of JavaScript, I enjoy reading
        fantasy books, watching movies, seeing music, camping, biking, juggling and contact juggling.
        </p>
        <p>
          This portfolio page is a full-fledged React application, bundled and optimized with Webpack&nbsp;2. Client-side routing with React Router 4. Check out the <a target="_blank" href="https://github.com/libeja/portfolio/tree/master/src">source code</a>.
        </p>
      </div>    
      <div className="education-section">
      <h4>Education and Certificates:</h4>
      <div className="education-list-container">
      <ul className="education-list">
          <li>Bachelor of Arts, <span className="italic">Brown University</span></li>
          <li>Front End Development Certificate, <span className="italic">freeCodeCamp</span> <a href="https://www.freecodecamp.com/libeja/front-end-certification" target="_blank"><span className='view-link'>view</span></a></li>
          <li>Data Visualization / ReactJS Certificate, <span className="italic">freeCodeCamp</span> <a href="https://www.freecodecamp.com/libeja/data-visualization-certification" target="_blank"><span className='view-link'>view</span></a></li>
          <li>Back End Development Certificate, <span className="italic">freeCodeCamp</span> <a href="https://www.freecodecamp.com/libeja/back-end-certification" target="_blank"><span className='view-link'>view</span></a></li>
          <li>CS50: Introduction to Computer Science Certificate of Completion, <span className="italic">Harvard edX</span> <a href="https://courses.edx.org/certificates/a282a2d7e06a46caba63dc59c2e2bfe0" target="_blank"><span className='view-link'>view</span></a></li>
      </ul>
      </div>
      </div>
      <div className="skills-section">
        <h4>Skills:</h4>
        {/* Devicons from: http://konpa.github.io/devicon/ */}
        <div className="devicon-container">
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-javascript-plain"></i>
          <br/>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-webpack-plain-wordmark"></i>
          <i className="devicon-sass-original"></i>
        </div>
        <div className="other-skills-container">
          <div>
          <span className="other-skills"><span className="bold underline">Other Skills</span>: Redux, Webpack 2, Git</span>
          <span className="other-skills"><span className="bold underline">Learning</span>: Node.js, MongoDB, Express.js</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;