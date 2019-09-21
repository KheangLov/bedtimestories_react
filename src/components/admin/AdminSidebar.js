import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminSidebar extends Component {
  render() { 
    return (
      <aside className="sidebar" id="sidebar-main">
        <div className="sidebar-header text-center">
          <img src="" alt="" className="img-responsive img-display" id="sidebar-img" />
          <h3 className="site-name" id="sidebar-title">BEDTIMESTORIES</h3>
        </div>
        <ul className="nav nav-menu">
          <li className="sidebar-li>">
            <Link to="/">
              <i className="fa fa-tachometer icon-script"></i>
              <div className="sidebar-text-link">Dashboard</div>
            </Link>
          </li>
          <li className="sidebar-li">
            <Link to="/">
              <i className="fa fa-user-circle icon-script"></i>
              <div className="sidebar-text-link">Profile</div>
            </Link>
          </li>
          <li className="sidebar-li">
            <Link to="/admin/user">
              <i className="fa fa-user icon-script"></i>
              <div className="sidebar-text-link">Users</div>
            </Link>
          </li>
          <li className="sidebar-li">
            <Link to="/">
              <i className="fa fa-columns icon-script"></i>
              <div className="sidebar-text-link">Pages</div>
            </Link>
          </li>
          <li className="sidebar-li">
            <Link to="/">
              <i className="fa fa-table icon-script"></i>
              <div className="sidebar-text-link">Categories</div>
            </Link>
          </li>
          <li className="sidebar-li">
            <Link to="/">
              <i className="fa fa-pencil-square-o icon-script"></i>
              <div className="sidebar-text-link">Posts</div>
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}
 
export default AdminSidebar;