import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.number = 1;
  }

  componentDidMount() {
    axios.get(`http://localhost:1337/api/v1/users`)
      .then(response => {
        const users = response.data.data.data;
        this.setState({ users });
      })
      .catch(error => {
        console.log(error);
      });
  }

  capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  render() { 
    return (
      <>
        <Link to="/admin/create/user" class="btn btn-default btn-addp">
          <span class="btn-label">
            <i class="ti-plus"></i> 
          </span>
          Add New
        </Link>
        <div class="row">
          <div class="col-sm-12">
            <div class="card card-tasks">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="add-post">All Users</h2>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <input type="text" name="search" id="search-text" class="form-control input-mar" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body table-responsive">
                <table class="table table-striped" id="table-data">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(user => (
                      <tr>
                        <td style={{ display: 'none' }}>{user.id}</td>
                        <td><strong>{this.number++}</strong></td>
                        <td>
                          <strong>
                            {this.capitalize(user.fullname)}
                          </strong>
                        </td>
                        <td>{user.email}</td>
                        <td>
                          {
                            user.status === 'active' ? <span class="label label-success">{this.capitalize(user.status)}</span> : 
                            (user.status === 'ban' ? <span class="label label-warning">{this.capitalize(user.status)}</span> : 
                            (user.status === 'inactive' ? <span class="label label-danger">{this.capitalize(user.status)}</span> : 
                            ''
                          ))}
                        </td>
                        <td><span class="label label-default">{this.capitalize(user.role_id.name)}</span></td>
                        <td class="td-actions">
                          <Link to="" class="btn-icon btn-icon-primary" data-toggle="tooltip" data-placement="top" title="View">
                            <i class="ti-image"></i>
                          </Link>
                          <Link to="" class="btn-icon btn-icon-info" data-toggle="tooltip" data-placement="top" title="Edit">
                            <i class="ti-pencil"></i>
                          </Link>
                          <Link to="" onClick="" class="btn-icon btn-icon-warning" data-toggle="tooltip" data-placement="top" title="Ban">
                            <i class="ti-na"></i>
                          </Link>
                          <Link to="" onClick="" class="btn-icon btn-icon-danger" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i class="ti-trash"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
 
export default User;