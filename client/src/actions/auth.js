import { AUTH } from '../constanta/actionTypes'
import * as api from '../api'

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // login the user
    const { data } = await api.signIn(formData)
    dispatch({ type: AUTH, data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // signup the user
    const { data } = await api.signUp(formData)
    dispatch({ type: AUTH, data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
