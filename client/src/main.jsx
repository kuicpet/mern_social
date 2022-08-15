import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { GoogleOAuthProvider } from '@react-oauth/google'
import reducers from './reducers'


const store = createStore(reducers, compose(applyMiddleware(thunk)))
const clientId = import.meta.env.VITE_GOOGLE_TOKEN
const clientSecret = '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'
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
)
