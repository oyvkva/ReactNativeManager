import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyABj1cXhp4shEfuymlGe69cIaSd6kVcydQ',
      authDomain: 'manager-36717.firebaseapp.com',
      databaseURL: 'https://manager-36717.firebaseio.com',
      projectId: 'manager-36717',
      storageBucket: '',
      messagingSenderId: '395209600536'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
