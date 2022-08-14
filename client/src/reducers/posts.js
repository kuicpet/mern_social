import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../constanta/actionTypes'

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload)
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case FETCH_ALL_POSTS:
      return action.payload
    case CREATE_POST:
      return [...posts, action.payload]
    default:
      return posts
  }
}
