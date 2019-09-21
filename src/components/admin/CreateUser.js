import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      created_date: this.getCurrentDatetime(),
      updated_date: this.getCurrentDatetime(),
      vkey: 0,
      verified: 1,
      password_types: 1,
      password_expired_date: '2019/09/30',
      expired: 0,
      status: 'inactive'
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/api/v1/roles')
      .then(response => {
        const roles = response.data.data;
        this.setState({ roles });
      })
      .catch(error => console.log(error));
  }

  capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  getCurrentDatetime = () => {
    const date = new Date();
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  submitHandler = async e => {
    e.preventDefault();
    const fullname = `${this.state.firstname}${this.state.lastname}`;
    await this.setState({ fullname });
    console.log(this.state);
    await axios.post('http://localhost:1337/api/v1/users', this.state)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  render() { 
    return (
      <div className="row">
        <div className="col-sm-8">
          <div className="card card-info">
            <div className="card-header">
              <h4 className="header">Add User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.submitHandler}>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="info-name">Firstname</label>
                      <input type="text" name="firstname" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="info-name">Lastname</label>
                      <input type="text" name="lastname" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="info-name">Email Address</label>
                      <input type="email" name="email" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="info-name">Password</label>
                      <input type="password" name="password" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="info-name">Confirm Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label className="info-name">Password Types</label>
                      <select id="password_types" className="form-control" onChange={this.changeHandler}>
                        <option value="0">Non-Life Time</option>
                        <option value="1">Life Time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label className="info-name">Number of Months</label>
                      <select id="number_of_months" className="form-control">
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label className="info-name">Gender</label>
                      <select name="gender" className="form-control" onChange={this.changeHandler}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label className="info-name">Status</label>
                      <select name="status" className="form-control" onChange={this.changeHandler}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="info-name">Role</label>
                      <select name="role_id" className="form-control" onChange={this.changeHandler}>
                        <option value="0">Please select role</option>
                        {this.state.roles.map(role => (
                          <option value={role.id} key={role.id}>{this.capitalize(role.name)}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="info-name">Date of Birth</label>
                      <input type="date" name="dob" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="info-name">Address</label>
                      <textarea name="address" onChange={this.changeHandler} className="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="info-name">City</label>
                      <input type="text" name="city" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="info-name">Country</label>
                      <input type="text" name="country" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="info-name">Phone</label>
                      <input type="number" name="phone" className="form-control" onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="info-name">About Me</label>
                      <textarea name="about" onChange={this.changeHandler} className="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="info-name">Quote</label>
                      <textarea name="quote" onChange={this.changeHandler} className="form-control" rows="3"></textarea>
                      <div className="text-right btn-wrap">
                        <Link to="/admin/user" className="btn btn-danger btn-mar">Cancel</Link>
                        <button type="submit" className="btn btn-primary btn-mar">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default CreateUser;