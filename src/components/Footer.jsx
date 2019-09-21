import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
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
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="inner-footer">
                <Link to="/" className="brand-footer">
                  <div className="row mar-bot">
                    <div className="col-sm-2 text-center no-padd">
                      <div className="logo-brand">
                        <img src="/images/icon-logo.png" alt="Bedtimestories" className="img-logo" />
                      </div>
                    </div>
                    <div className="col-sm-10 no-lpadd">
                      <div className="text-brand">
                        <h2 className="name"> Bedtimestories </h2>
                        <h3 className="text"> Exciting tales for young & old </h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="text-footer">
                  The storytelling app for families - read diverse <br />
                  & empowering stories or tell them in your own <br />
                  words. <br />
                  &copy; Little Light Studio GmbH
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="inner-footer">
                <h2 className="menu-header">Product</h2>
                <ul className="list-unstyled">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/libraries">Library</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="inner-footer">
                <h2 className="menu-header">Company</h2>
                <ul className="list-unstyled">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link onClick={() => this.handlePath('admin')}  to="/admin">Admin Site</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="inner-footer">
                <h2 className="menu-header">Connect with us</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/facebook" target="_blank">
                      <i className="fa fa-facebook-square"></i> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/twitter" target="_blank">
                      <i className="fa fa-twitter"></i> Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/instagram" target="_blank">
                      <i className="fa fa-instagram"></i> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="/google" target="_blank">
                      <i className="fa fa-google-plus"></i> Google-Plus
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
 
export default Footer;