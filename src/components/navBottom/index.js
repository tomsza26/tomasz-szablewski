/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { toEng, toPL } from '../../redux';

import './index.scss';

function index(props) {
  const { lang } = props;

  const changeLang = () => {
    const doc = document.querySelector('.lang');
    if (doc.innerHTML === 'ENG') {
      props.toEng();
    } else {
      props.toPL();
    }
  };

  return (
    <div className="navBottom">
      <div className="lang" onClick={changeLang} role="button" tabIndex={0}>{lang}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  toEng: () => dispatch(toEng()),
  toPL: () => dispatch(toPL()),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
