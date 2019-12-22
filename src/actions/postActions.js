import { FETCH_POSTS, SELECT_SUBREDDIT } from "./types";

export const selectSubreddit = subreddit => {
  return {
    type: SELECT_SUBREDDIT,
    payload: subreddit
  };
};

export const fetchPosts = () => (dispatch, getState) => {
  const url = getState().posts.subreddit;
  const subreddit = url.split(" ").join("+");
  console.log(subreddit, "sub");
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.data.children
      })
    );
};
