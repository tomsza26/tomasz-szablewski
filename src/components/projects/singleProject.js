import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from 'react-redux';

import imgAlt from './images/loading.gif';

function singleProject(props) {
  const {
    desc, name, url, homepage, image, techUsed, techUse, liveV, codeV,
  } = props;

  let imgUrl;
  try {
    imgUrl = require(`./images${image}`).default;
  } catch (err) {}

  return (
    <div className="projectBlock">
      <header className="projName">{name}</header>
      <div className="imgCont">
        <LazyLoadImage
          src={imgUrl}
          alt={imgAlt}
          className="projImg"
        />
        <div className="projDesc">{desc || 'No description here.'}</div>
      </div>
      <div className="plinks">
        {homepage ? (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="aLinks"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              color="#ff4ba8"
              className="iconL"
            />
            <span className="codeN">{liveV}</span>
          </a>
        ) : (
          ''
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="aLinks"
        >
          <FontAwesomeIcon icon={faCode} color="#ff4ba8" className="iconL" />
          <span className="codeN">{codeV}</span>
        </a>
      </div>
      <div className="forSmaller">{desc}</div>
      <div className="pTechUsed">
        <header className="pHeaderTech">{techUse}</header>
        <div className="pTechItemsCont">
          {techUsed.map((item) => (
            <div className="pTechItem" key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  techUse: state.techUse,
  liveV: state.liveV,
  codeV: state.codeV,
});

export default connect(mapStateToProps)(singleProject);
