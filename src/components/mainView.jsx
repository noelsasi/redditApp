import React, { Component } from "react";
import axios from "axios";

import Post from "./postView";
import Subreddits from "./subreddits";
class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      subreddit: "images"
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios
      .get(`https://www.reddit.com/r/${this.state.subreddit}.json`)
      .then(res => res.data.data)
      .then(data => this.setState({ data: data.children }));
  }

  getSubreddit = value => {
    this.setState({ subreddit: value }, () => this.loadData());
  };

  render() {
    const { data } = this.state;

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
        />
      </div>
    ));
    return (
      <div className="container">
        <div className="posts-wrapper col-md-6 mx-auto">
          <div className="sub-reddits mb-3">
            <Subreddits getSubreddit={this.getSubreddit} />
          </div>
          <div className="posts mt-4">
            <h6>
              Results for "<u>{this.state.subreddit}</u>"
            </h6>
            {posts}
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
