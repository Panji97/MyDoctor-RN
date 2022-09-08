import React from 'react';
import {Routes} from './src/routes';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
    'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  ]);
  return (
    <>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
