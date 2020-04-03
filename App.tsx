import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';


const theme = {
  Button: {
    raised: true
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Button title="Click me!"/>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
