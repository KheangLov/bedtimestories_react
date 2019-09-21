import React, { Component } from 'react';
import axios from 'axios';
import Suggestbar from './Suggestbar';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      images: []
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://localhost:1337/api/v1/story/${params.id}`)
      .then(response => {
        const story = response.data.data[0];
        const images = story.images;
        this.setState({ story, images });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row no-gutter single-post">
          <div className="col-md-9 main-content">
            <main className="content">
              <h2 className="story-title">{this.state.story.title}</h2>
              <p className="story-text">
                {this.state.story.content}
              </p>
              {this.state.images.length > 0 &&
                this.state.images.map(image => (
                  <img src={`/upload/images/${image.name}`} alt={image.name} className="img-responsive img-radius" key={this.props} />
                ))
              }
            </main>
          </div>
          <Suggestbar />
        </div>
      </div>
    );
  }
}

export default Details;
