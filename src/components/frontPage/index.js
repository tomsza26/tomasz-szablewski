import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';

import './index.scss';
import Profilowe from './images/tomekVHS.JPG';

function index(props) {
  const { frontText } = props;

  return (
    <div id="frontContainer">
      <div id="aboutCont">
        <img src={Profilowe} alt="Tomek" id="tomekPhoto" />
        <pre id="tomekDesc">
          {frontText}
        </pre>
        <div id="iconsSocial">
          <a href="https://github.com/tomsza26" className="linkFront" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="iconFront" />
          </a>
          <a href="https://www.linkedin.com/in/tomasz-szablewski-513539199/" className="linkFront" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="iconFront" />
          </a>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  frontText: state.frontText,
});

export default connect(mapStateToProps)(index);
