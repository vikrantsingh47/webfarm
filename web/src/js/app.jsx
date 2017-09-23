//window.$ = window.jQuery = require("jquery");

import '../css/main.scss';
import {globalContainer} from './dom-loader';
import {NavbarMain} from '../components/common/navbar-main.jsx';
import {navbarData} from '../components/data/navbar-data.js';
import {FooterMain} from '../components/common/footer-main.jsx';
import {AppMain} from '../components/app-main.jsx';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {About} from '../components/pages/about.jsx';

var React = require('react');
var ReactDom = require('react-dom');

class GlobalContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
      <div>
        <div className="headerContainer">
          <div className="navbarContainer">
            <NavbarMain {...navbarData}/>
          </div>
        </div>

        <div className="appContainer">

            <Switch>
              <Route exact path="/" component={AppMain}/>
              <Route exact path="/about" component={About}/>
            </Switch>

        </div>

        <div className="footerContainer">
          <FooterMain/>
        </div>
      </div>
      </Router>
    )
  }
}

ReactDom.render(
  <GlobalContainer/>, globalContainer);
