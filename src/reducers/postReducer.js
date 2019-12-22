import { FETCH_POSTS, SELECT_SUBREDDIT } from "../actions/types";

const initialState = {
  items: [],
  subreddit: "images"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case SELECT_SUBREDDIT:
      return {
        ...state,
        subreddit: action.payload
      };
    default:
      return state;
  }
}
