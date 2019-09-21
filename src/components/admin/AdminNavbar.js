import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminNavbar extends Component {
  render() { 
    return (
      <nav className="navbar navbar-default navbar-main">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="btn-toggle-sidebar" id="toggle-sidebar">
              <i className="fa fa-bars"></i>
            </div>
            <div className="btn-toggle-sidebar btn-show-sidebar" id="long-sidebar">
              <i className="fa fa-ellipsis-v"></i>
            </div>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand float-left" to="/"></Link>
          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i> <span className="caret"></span></Link>
                <ul className="dropdown-menu card card-navbar">
                  <li><Link to="/">Action</Link></li>
                  <li><Link to="/">Another action</Link></li>
                  <li><Link to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/" className="dropdown-toggle nav-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user fa-nav"></i>
                </Link>
                <ul className="dropdown-menu card card-navbar">
                  <li><Link to="/"><strong>See Homepage</strong></Link></li>
                  <li role="separator" className="divider no-margin"></li>
                  <li><Link to="/"></Link></li>
                  <li><Link to="/"></Link></li>
                  <li><Link to="/"></Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default AdminNavbar;