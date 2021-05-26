import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';
import {light as lightTheme, mapping} from '@eva-design/eva';
import React from 'react';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Router />
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
