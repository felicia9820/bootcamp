import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
  apiKey: "AIzaSyAHz__Nkm-w0BO_ce2-pWCq-RxmVnb5C6E",
  authDomain: "bootcamp-3df8e.firebaseapp.com",
  databaseURL: "https://bootcamp-3df8e.firebaseio.com",
  projectId: "bootcamp-3df8e",
  storageBucket: "bootcamp-3df8e.appspot.com",
  messagingSenderId: "153404852482",
  appId: "1:153404852482:web:259d32ae800bcd24cf5a1b"
};

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root')
);

