import React from 'react';
import {Routes} from './src/routes';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
