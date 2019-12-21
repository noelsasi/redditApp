import React, { Component } from "react";
import axios from "axios";
import loader from "./images/loader.gif";

import Post from "./postView";
import Subreddits from "./subreddits";
class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      subreddit: "all"
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const { subreddit } = this.state;
    const url = subreddit.split(" ").join("+");
    axios
      .get(`https://www.reddit.com/r/${url}.json`)
      .then(res => res.data.data)
      .then(data => this.setState({ data: data.children }));
  }

  time = date => {
    const result = new Date(date);
    return result.toLocaleDateString();
  };

  changeSubreddit = () => {
    this.setState({ data: [] });
    this.loadData();
  };

  getSubreddit = value => {
    this.setState({ subreddit: value }, () => this.changeSubreddit());
  };

  render() {
    const { data } = this.state;
    console.log(data, "api");
    const posts = data.map((post, i) => (
      <div key={i}>
        <Post
          url={post.data.url}
          thumbnail={post.data.thumbnail}
          title={post.data.title}
          author={post.data.author}
          comments={post.data.num_comments}
          subscribers={post.data.subreddit_subscribers}
          score={post.data.score}
          time={this.time(post.data.created)}
        />
      </div>
    ));
    return (
      <div className="container">
        <div className="posts-wrapper col-md-6 mx-auto">
          <div className="sub-reddits mb-3">
            <Subreddits getSubreddit={this.getSubreddit} />
          </div>
          <div className="posts my-4">
            <h6>
              Results for "<u>{this.state.subreddit}</u>"
            </h6>
            {/* <img src={loader} alt="loading" className="img-fluid" /> */}
            {this.state.data.length > 0 ? (
              posts
            ) : (
              <img src={loader} alt="loading" className="img-fluid" />
            )}
            {/* {posts} */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
