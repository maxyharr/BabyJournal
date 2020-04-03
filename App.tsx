import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Home } from './src/screens/Home';


const theme = {
  Button: {
    raised: true
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}
