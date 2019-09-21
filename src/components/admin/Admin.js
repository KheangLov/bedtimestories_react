import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import AdminFooter from './AdminFooter'
import User from './User';
import CreateUser from './CreateUser';

class Admin extends Component {

  render() { 
    return (
      <div className="wrapper clearfix">
        <AdminSidebar />
        <div className="main-wrapper" id="site-wrapper">
          <Router>
            <AdminNavbar />
            <div className="content"> 
              <Switch>
                <Route path="/admin/user" component={User} />
                <Route path="/admin/create/user" component={CreateUser} />
              </Switch>
            </div>
            <AdminFooter />
          </Router>
        </div>
      </div>
    );
  }
}
 
export default Admin;