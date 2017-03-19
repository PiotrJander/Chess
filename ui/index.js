import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './containers/App'
// import configureStore from './store/configureStore'
// import 'todomvc-app-css/index.css'
import 'normalize.css/normalize.css'
import {Chess} from './components/Chess'

// const store = configureStore()

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

render(
  <div>
    <Chess />
  </div>,
  document.getElementById('root')
)