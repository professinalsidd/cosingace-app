import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackRoutes from './src/routes/stack';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <StackRoutes />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
