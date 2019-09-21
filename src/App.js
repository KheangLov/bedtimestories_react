import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Libraries from './components/Libraries';
import About from './components/About';
import Footer from './components/Footer';
import Seemore from './components/Seemore';
import Notfound from './components/NotFound';
import Admin from './components/admin/Admin';
import Details from './components/Details';

class App extends Component {
  state = {
    location: window.location.pathname.replace('/', '')
  };

  render() {
    return (
      <Fragment>
        <Router>
          {this.state.location.substring(0, 5) !== 'admin' &&
            <Header location={this.state.location} />
          }
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/libraries" component={Libraries} />
            <Route path="/about" component={About} />
            <Route path="/seemore" component={Seemore} />
            <Route path="/details/:id" component={Details} />
            <Route path="/admin" component={Admin} />
            <Route path="/facebook" component={() => {
              window.location.href = 'https://facebook.com';
              return false;
            }} />
            <Route path="/twitter" component={() => {
              window.location.href = 'https://twitter.com';
              return false;
            }} />
            <Route path="/instagram" component={() => {
              window.location.href = 'https://instagram.com';
              return false;
            }} />
            <Route path="/google" component={() => {
              window.location.href = 'https://plus.google.com';
              return false;
            }} />
            <Route path="/" component={Notfound} />
          </Switch>
          {this.state.location.substring(0, 5) !== 'admin' &&
            <Footer location={this.state.location} />
          }        
        </Router>
      </Fragment>
    );
  };
}

export default App;
