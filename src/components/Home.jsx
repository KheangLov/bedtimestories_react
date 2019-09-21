import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() { 
    return (
      <Fragment>
        <section className="bg bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="inner-col">
                  <h1 className="sect-header">The storytelling app for families</h1>
                  <h4 className="sect-text">Awake the inner storyteller with diverse and empowering stories for young & old. Storytelling has never been easier.</h4>
                  <Link to="#sect-tab" className="btn btn-default btn-lg btn-bcolor">How does it work?</Link>
                  <Link to="/libraries" className="btn btn-default btn-lg btn-bwhite">Explore Library</Link>
                  <div className="sect-link">
                    <Link to="http://www.parents-choice.org/product.cfm?product_id=35555" className="link">
                      Parents' Choice Approved App
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="images/Hero-Karlotta1x-8bd462e8.jpg" alt="Hero-Karlotta@1x-8bd462e8" className="img-responsive" />
                <div className="story-link text-center">
                  Karlotta the Knight with her squire and steed.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg bg-color">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="inner-col">
                  <img src="images/family.svg" alt="family" className="img-responsive" />
                  <h3 className="col-header">Quality Family Time</h3>
                  <p className="col-text">Storytelling plays a vital role when growing up. Create lasting memories and embark on fantastic journeys with beloved characters.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="inner-col">
                  <img src="images/bookshelf.svg" alt="bookshelf" className="img-responsive" />
                  <h3 className="col-header">Teach Valuable Life Lessons</h3>
                  <p className="col-text">We deeply care about diversity and empowerment - each Storyworld contains educational aspects and storytelling tips to teach valuable life lessons.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="inner-col">
                  <img src="images/book.svg" alt="book" className="img-responsive" />
                  <h3 className="col-header">A Safety Net for Storytelling</h3>
                  <p className="col-text">Each story includes an easy-to-remember summary of Storypoints and the interactive Storybuilder generates millions of exciting storylines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sect-tab" className="bg bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="tab-header">A platform for families</h2>
                <p className="tab-text">
                  We deeply care about captivating stories - Bedtime Stories is built to help you tell better stories and helps you engage with your family through storytelling.
                </p>
                <ul className="nav nav-pills nav-stacked nav-custom">
                  <li className="post-tab active">
                    <a data-toggle="tab" href="#first-story">
                      <h3 className="inner-theader">Growing collection of Storyworlds</h3>
                      <p className="inner-ttext">
                        Explore exciting Storyworlds in every imaginable genre for storytellers, readers and listeners from young to old.
                      </p>
                    </a>
                  </li>
                  <li className="post-tab">
                    <a data-toggle="tab" href="#second-story">
                      <h3 className="inner-theader">Endless source of storylines</h3>
                      <p className="inner-ttext">
                        Storyworlds are growing collections of thematically-related stories written by authors from around the world.
                      </p>
                    </a>
                  </li>
                  <li className="post-tab">
                    <a data-toggle="tab" href="#third-story">
                      <h3 className="inner-theader">Growing collection of Storyworlds</h3>
                      <p className="inner-ttext">
                        Interactively create your very own adventures - generate millions of hilarious stories in your genre of choice.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <div className="tab-content">
                  <div id="first-story" className="tab-pane fade in active">
                    <img src="/images/explore1x-5ede6cd7.jpg" alt="explore@1x" className="img-responsive img-center" />
                  </div>
                  <div id="second-story" className="tab-pane fade">
                    <img src="/images/storyworld1x-8aff2543.jpg" alt="storyworld@1x" className="img-responsive img-center" />
                  </div>
                  <div id="third-story" className="tab-pane fade">
                    <img src="/images/storybuilder1x-c2817d58.jpg" alt="storybuilder@1x" className="img-responsive img-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="jumbotron jumbo-bg no-mar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="jumbo-header"> Stay in the know </h1>
                <h2 className="jumbo-text"> 
                  Receive must-read articles and feature updates 
                </h2>
              </div>
              <div className="col-sm-6">
                <div className="input-group input-group-lg">
                  <input type="text" className="form-control form-custom" placeholder="Enter your email" />
                  <span className="input-group-btn">
                    <button className="btn btn-default btn-form" type="button">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg bg-color more-padding">
          <div className="container">
            <div className="text-center last-sect">
              <h1 className="header">Don't be shy, say hi!</h1>
              <p className="text">
                We might deal with trolls, werewolfs and huge dogs, <br />
                but we don’t bite.
              </p>
              <a href="mailto:support@getbedtimestories.com" className="btn btn-default btn-lg btn-git">Get in touch</a>
              <div className="img-wrap">
                <div className="img-overlay" style={{ backgroundImage: `url(/upload/post_images/budo-00685600.png)` }}></div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
 
export default Home;