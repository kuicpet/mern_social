import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_BY_SEARCH,
  LIKE_POST,
  START_LOADING,
  END_LOADING,
} from '../constanta/actionTypes'

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      }
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      }
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      }
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      }
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      }
    default:
      return state
  }
}
