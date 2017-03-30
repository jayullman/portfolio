import React from 'react';
import '../styles/projects.scss';

const Project = (props) => {
  const techList = props.techList;
  const techString = techList.join(' / ');
  let className;

  if (props.type === 'showcase-project') {
    className = 'project-container';
  } else {
    className = 'more-project-container';
  }

  return (
    <div className={className}>
      <div className='project-name'>{props.name}
      </div>
      <a href={props.liveLink} target='_blank'>
        <div style={{ backgroundImage: `url(${props.img})`}} className='project' />
      </a>
      <div className='project-links'>
        <a href={props.liveLink} target='_blank'>Live Site</a> / 
        <a href={props.gitLink} target='_blank'> Source Code</a> <i className="fa fa-github" aria-hidden="true"></i>
      </div>
      <div className='techList'>
        {techString}
      </div>
      <div className='project-description'>
        {props.description}
      </div>
    </div>
  );
}

export default Project;