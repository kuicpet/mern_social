import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING
} from '../constanta/actionTypes'
import * as api from '../api'

//Action Ctreators
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.fetchPosts(page)
    // console.log(data)
    dispatch({ type: FETCH_ALL_POSTS, payload: data })
    dispatch({type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery)
    dispatch({ type: FETCH_BY_SEARCH, payload: data })
    dispatch({type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.createPost(post)
    dispatch({ type: CREATE_POST, payload: data })
    dispatch({type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: UPDATE_POST, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: DELETE_POST, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: UPDATE_POST, payload: data })
  } catch (error) {
    console.log(error)
  }
}
