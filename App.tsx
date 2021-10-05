import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
