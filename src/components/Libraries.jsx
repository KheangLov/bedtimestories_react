import React, { Component } from 'react';
import Posts from './LatestPost';
import AllPosts from './AllPosts';

class Libraries extends Component {

  render() { 

    return (
      <div className="container">
        <Posts />
        <AllPosts />
      </div>
    );
  }
}
 
export default Libraries;