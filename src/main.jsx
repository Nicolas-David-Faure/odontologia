import React from 'react'
import ReactDOM from 'react-dom/client'
//Redux
import { store } from './store/index'
import { Provider } from 'react-redux'

import App from './App.jsx'
import './assets/styles/_index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)
