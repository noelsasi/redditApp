import React, { Component } from "react";

import Post from "./postView";
import Subreddits from "./subreddits";

import { connect } from "react-redux";
import { fetchPosts, selectSubreddit } from "../actions/postActions";
import PropTypes from "prop-types";

import store from "../store";

class MainView extends Component {
  constructor(props) {
    super(props);

    this.getSubreddit = this.getSubreddit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  time = date => {
    const result = new Date(date);
    return result.toLocaleDateString();
  };

  getSubreddit(value) {
    this.props.selectSubreddit(value);
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts, "api");

    const { subreddit } = store.getState().posts;

    const posts = this.props.posts.map((post, i) => (
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
              Results for "<u>{subreddit}</u>"
            </h6>
            {posts}
          </div>
        </div>
      </div>
    );
  }
}

MainView.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  selectSubreddit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  selectSubreddit: state.posts.subreddit
});

export default connect(mapStateToProps, { fetchPosts, selectSubreddit })(
  MainView
);
