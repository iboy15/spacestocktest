/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import AppContainer from './src/Navigation';
import {IS_ANDROID} from './src/Utils';
const App = () => {
  return (
    <>
      <StatusBar barStyle={IS_ANDROID ? 'light-content' : 'dark-content'} />
      <AppContainer />
    </>
  );
};

export default App;
