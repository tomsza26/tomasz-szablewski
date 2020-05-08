import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.scss';
import FrontPage from './components/frontPage/index';
import Navigation from './components/navBar/index';
import BottomNav from './components/navBottom/index';
import Skills from './components/skills/index';
import ContactMe from './components/contactMe/index';
import Projects from './components/projects/index';

function App() {
  window.onscroll = () => {
    if (document.getElementById('changeMind')) {
      const tog = document.getElementById('changeMind');
      if (window.pageYOffset !== 0) {
        tog.href = '#frontContainer';
        tog.className = 'arrow-icon open';
      } else {
        tog.href = '#sHeader';
        tog.className = 'arrow-icon';
      }
    }
  };


  return (
    <Router>
      <div id="App">
        <Provider store={store}>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <FrontPage />
              <Skills />
              <AnchorLink
                className="arrow-icon"
                id="changeMind"
                href="#sHeader"
                onClick={() => {
                  const tog = document.getElementById('changeMind');
                  if (document.querySelector('.arrow-icon.open')) {
                    tog.href = '#frontContainer';
                  } else {
                    document.getElementById('changeMind').classList.toggle('open');
                    tog.href = '#sHeader';
                  }
                }}
              >
                <span className="left-bar" />
                <span className="right-bar" />
              </AnchorLink>
            </Route>
            <Route path="/contact-me">
              <ContactMe />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
          <BottomNav />
        </Provider>
      </div>
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
