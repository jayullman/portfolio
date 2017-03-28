import React from 'react';
import '../styles/footer.scss';

import ScrollableAnchor from 'react-scrollable-anchor';

const Footer = () => {

  return (
    <section className='footer'>
      <ScrollableAnchor id='contact'>
        <h3>&#60; Find me /&#62;</h3>
      </ScrollableAnchor>
      <div className="icons-container">
        <a href="https://github.com/libeja" target="_blank"><i className="fa fa-github-square fa-4x" aria-hidden="true"></i></a>
        <a href="https://www.freecodecamp.com/libeja" target="_blank"><i className="fa fa-free-code-camp fa-4x" aria-hidden="true"></i></a>
        <a href="mailto:jayullman@gmail.com"><i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i></a>
      </div>
      <br/>
      <small>Created by Jay</small>
      <br/>
      <small>Using handcrafted HTML, CSS, JavaScript, React and bundled and optimized with Webpack
      <br/>
      <br/>
      This portfolio is a single page React application
      <br/>
      View this portolio's source code on <a target="_blank" href="https://github.com/libeja">GitHub&nbsp;
          <i className="fa fa-github" aria-hidden="true"></i></a>
      </small>
    </section>
  );
}

export default Footer;