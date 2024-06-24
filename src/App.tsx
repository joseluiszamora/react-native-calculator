import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './config/theme/app-theme';
import {Calculator} from './ui/screens/Calculator';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Calculator />
    </View>
  );
}

export default App;
