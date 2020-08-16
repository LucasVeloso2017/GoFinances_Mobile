
import React from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';

import Routes from './src/Routes/Stack.routes'

export default function App() {
  return (
    <>  
      <StatusBar translucent barStyle="light-content"/>
      <Routes/>
    </>
  );
}

