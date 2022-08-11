import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// provider allow us to access the store from anywhere in our application
import { Provider } from 'react-redux';

//cratestore take two things inside (reducers) and the compose which is a function
// compose allow us to use applyMiddleware function and then we pass redux-thunk in it 
import { applyMiddleware, compose } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import reducers from './reducers';

//Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action
// basically it allows to use async/await on action function
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
