import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
