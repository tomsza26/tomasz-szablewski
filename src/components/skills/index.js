import React from 'react';
import { connect } from 'react-redux';

import './index.scss';

function index(props) {
  const {
    skills,
    languages,
    libraries,
    learning,
    practices,
    tools,
    others,
  } = props;

  return (
    <div id="sContainer">
      <div id="sHeader">{skills}</div>
      <div className="sAllPerks">
        <div id="sLanguages" className="sContents">
          <header id="sLangHead" className="sHeaders">
            {languages}
          </header>
          <div className="sContent">
            <div className="sContItem">HTML5</div>
            <div className="sContItem">CSS3</div>
            <div className="sContItem">JAVASCRIPT</div>
            <div className="sContItem">typescript</div>
          </div>
        </div>
        <div id="sLearning" className="sContents">
          <header id="sLearnHead" className="sHeaders">
            {learning}
          </header>
          <div className="sContent">
            <div className="sContItem">three.js</div>
            <div className="sContItem">python</div>
            <div className="sContItem">java</div>
            <div className="sContItem">pixi.js</div>
            <div className="sContItem">graphql</div>
            <div className="sContItem">figma/adobe xd</div>
          </div>
        </div>
        <div id="sTools" className="sContents">
          <header id="sToolHead" className="sHeaders">
            {libraries}
          </header>
          <div className="sContent">
            <div className="sContItem">react</div>
            <div className="sContItem">redux</div>
            <div className="sContItem">node.js</div>
            <div className="sContItem">express</div>
            <div className="sContItem">mongodb</div>
            <div className="sContItem">mern stack</div>
            <div className="sContItem">gatsbyjs</div>
          </div>
        </div>
        <div className="sContents">
          <header className="sHeaders">{others}</header>
          <div className="sContent">
            <div className="sContItem">npm</div>
            <div className="sContItem">RESTFUL API</div>
            <div className="sContItem">react router</div>
            <div className="sContItem">web components</div>
          </div>
        </div>
        <div id="sPractices" className="sContents">
          <header id="sPracHead" className="sHeaders">
            {practices}
          </header>
          <div className="sContent">
            <div className="sContItem">ES6+</div>
            <div className="sContItem">BEM</div>
            <div className="sContItem">react hooks</div>
            <div className="sContItem">eslint</div>
          </div>
        </div>
        <div className="sContents">
          <header className="sHeaders">{tools}</header>
          <div className="sContent">
            <div className="sContItem">webpack</div>
            <div className="sContItem">git, github</div>
            <div className="sContItem">sass</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  skills: state.skills,
  languages: state.languages,
  libraries: state.libraries,
  learning: state.learning,
  practices: state.practices,
  tools: state.tools,
  others: state.others,
});

export default connect(mapStateToProps)(index);
