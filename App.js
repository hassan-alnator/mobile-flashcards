import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {View, Text, StyleSheet} from 'react-native';

import rootReducer from './reducers'
import DeckListView from './components/Deck/DeckListView'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <DeckListView/>
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App