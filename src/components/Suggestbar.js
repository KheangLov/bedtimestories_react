
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Suggestbar extends Component {
  constructor(props) {
    super(props);
    this.state = { stories: [] };
    this.numbers = 0;
  }

  componentDidMount() {
    axios.get(`http://localhost:1337/api/v1/stories?per_page=6&date=true`)
      .then(response => {
        const stories = response.data.data.data;
        this.setState({ stories });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="col-md-3 suggest-bar">
        <aside className="suggestion">
          <h3 className="suggest-header">Suggestion</h3>
          <ul className="list-unstyled suggest-menu">
            {this.state.stories.map(item => (
                <li className="suggest-item clearfix" key={this.numbers++}>
                  <Link to={`/details/${item.id}`} className="suggest-inner card">
                    <div className="suggest-thumb">
                      <div style={{ backgroundImage: `url(/upload/thumbnails/${item.thumbnail})` }} className="thumb-overlay"></div>
                    </div>
                    <div className="suggest-description card-body">
                      <h6 className="suggest-title">{item.title}</h6>
                      <span className="suggest-type"><i className="fa fa-user"></i>{item.category_id.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>
    );
  }
}
 
export default Suggestbar;