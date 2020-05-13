/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SynthFoot from './synthwave';

import './index.scss';

function index(props) {
  const { contactPage, message, send } = props;

  useEffect(() => {
    SynthFoot();
  }, []);

  const [status, setStatus] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <div id="canvCont">
      <div id="canv">
        <div id="footCont">
          <div className="feedback-card">
            {status === '' ? (
              <>
                <pre className="feedback-header">
                  {contactPage}
                </pre>
                <form
                  className="feedback-body"
                  action="https://formspree.io/mnqberay"
                  onSubmit={submitForm}
                  method="POST"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    className="feedback-body__email"
                    placeholder="Email"
                  />
                  <textarea
                    type="text"
                    name="message"
                    required
                    className="feedback-body__message"
                    placeholder={message}
                    minLength="10"
                    maxLength="500"
                  />
                  <button type="submit">{props.send}</button>
                </form>
              </>
            ) : status === 'SUCCESS' ? (
              <div className="feedback-header">
                A message has been sent.
                <br />
                Thanks!
              </div>
            ) : (
              <div className="feedback-header">
                Oops! There has been an error.
                <br />
                Try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contactPage: state.contactPage,
  message: state.message,
  send: state.send,
});

export default connect(mapStateToProps)(index);
