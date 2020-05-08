/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import {
  NavLink as Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import PdfFile from '../../utils/CV_Tomasz_Szablewski.pdf';
import './index.scss';

function index(props) {
  const {
    home, projects, contactMe, downCV,
  } = props;

  const resBar = () => {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  };

  return (
    <>
      <div className="navTop">
        <a href={PdfFile} className="CV" download>
          {downCV}
        </a>
        <nav id="myTopnav" className="topnav">
          <FontAwesomeIcon icon={faBars} id="barsRes" onClick={resBar} />
          <a href={PdfFile} id="CV1" download className="CVRES">
            {downCV}
          </a>
          <Link to="/" className="CVRES" activeClassName="linkSel" exact>{home}</Link>
          <Link to="/projects" className="CVRES" activeClassName="linkSel">{projects}</Link>
          <Link to="/contact-me" className="CVRES" activeClassName="linkSel">{contactMe}</Link>
        </nav>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  home: state.home,
  projects: state.projects,
  contactMe: state.contactMe,
  downCV: state.downCV,
});

export default connect(mapStateToProps)(index);
