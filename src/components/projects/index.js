import React from 'react';
import { connect } from 'react-redux';

import './index.scss';
import Project from './singleProject';
import projectsEng from './projectsEng.json';
import projectsPL from './projectsPL.json';


function index(props) {
  const { myProjects } = props;

  let project;
  if (myProjects === 'MOJE PROJEKTY') {
    project = projectsPL;
  } else {
    project = projectsEng;
  }

  return (
    <div id="pContainer">
      <div id="pHeader">{myProjects}</div>
      <div id="pProjects">
        {project.map((item) => (
          <Project
            key={item.name}
            desc={item.overwiew}
            name={item.name}
            url={item.linkCode}
            homepage={item.linkLive}
            image={item.image}
            techUsed={item.techUsed}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myProjects: state.myProjects,
});

export default connect(mapStateToProps)(index);
