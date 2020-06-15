import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import App from './renderer/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import rootReducer from './store';
import bind from "./renderer/controllers/ui";
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
bind(store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
