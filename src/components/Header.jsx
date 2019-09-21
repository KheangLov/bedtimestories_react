import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Explore from './Explore';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handlePath = this.handlePath.bind(this);
    this.state = {
      path: this.props.location
    }
  }

  handlePath = path => {
    this.setState({ path });
  }

  render() {
    console.log("Location:", this.props);
    return (
      <Fragment>
        <header className="masthead">
          <nav className="navbar navbar-default navbar-custom" data-spy="affix" data-offset-top="70">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">
                  <img src="/images/icon-logo.png" alt="icon-logo" className="brand-image" /> Bedtimestories
                </Link>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li className={this.state.path === 'home' ? 'active' : ''}>
                  <Link onClick={() => this.handlePath('home')} to="/home">Home</Link>
                </li>
                <li className={this.state.path === 'libraries' ? 'active' : ''}>
                  <Link onClick={() => this.handlePath('libraries')} to="/libraries">Library</Link>
                </li>
                <li className={this.state.path === 'about' ? 'active' : ''}>
                  <Link onClick={() => this.handlePath('about')} to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {this.state.path !== 'home' &&
          <Explore />
        }
      </Fragment>
    );
  }
}
 
export default Header;
