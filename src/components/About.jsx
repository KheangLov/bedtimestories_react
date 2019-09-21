import React, { Component } from 'react';

class About extends Component {
  render() { 
    return (
      <div className="container">
        <div className="row no-gutter single-post">
          <div className="col-md-9 main-content">
            <main className="content">
              <h2 className="story-title">We are makers and doers</h2>
              <p className="story-text">
                Bedtime Stories grew into something far greater than a simple app - we became a community of international authors, illustrators and storytellers!
              </p>  
              <img src="images/budo-00685600.png" alt="budo" className="img-responsive img-radius" />
              <section className="section-wrapper about">
                <div className="about-header more-margin">
                  <h4 className="about-title">Press</h4>
                </div>
                <div className="stories">
                  <a href="https://newliteraryvoices.net/2018/02/25/one-more-story-please/" className="story">
                    <h3 className="sub-header"> One more story, please! </h3>
                    <p className="sub-text">
                      New Literary Voices — February 2018
                    </p>
                  </a>
                </div>
                <div className="stories">
                  <a href="https://issuu.com/storymonstersink/docs/smi_2018_02_february_digital/30" className="story">
                    <h3 className="sub-header"> Sparking Imagination with Stellar Science </h3>
                    <p className="sub-text">
                      Story Monsters Ink — February 2018  
                    </p>
                  </a>
                </div>
                <div className="stories">
                  <a href="https://luxtimes.lu/culture-life/32600-mullerthal-trolls-invade-bedtime-story-app" className="story">
                    <h3 className="sub-header"> Mullerthal trolls invade bedtime story app </h3>
                    <p className="sub-text">
                      Luxembourg Times — January 2018
                    </p>
                  </a>
                </div>
                <div className="stories">
                  <a href="http://www.parents-choice.org/product.cfm?product_id=35555" className="story">
                    <h3 className="sub-header"> Parents' Choice Award for Bedtime Stories </h3>
                    <p className="sub-text">
                      Parents' Choice — January 2018
                    </p>
                  </a>
                </div>
              </section>
            </main>
          </div>
          <div className="col-md-3 suggest-bar">
            <aside className="suggestion">
              <div className="about-sidebar">
                <h3 className="about-sideheader">Join us?</h3>
                <p className="about-sidetext">
                  We are always looking for authors from all around the world to join us and create exciting new characters and adventures.
                </p>
                <a href="join.html" className="btn btn-default btn-join">Join our team <i className="fa fa-heart"></i></a>
              </div>
              <div className="about-sidebar">
                <h3 className="about-sideheader">Download</h3>
                <a href="http://media.getbedtimestories.com/bedtimestories-presskit.zip" className="btn btn-default btn-lg btn-join">Download Press Kit <i className="fa fa-download"></i></a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;