/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ThemeProvider } from './src/theme/_useTheme';
import React from 'react';
import {
  SafeAreaView,// ios safe area
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import RouteNavigation from './src/routes/RouteNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:'red' // isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PaperProvider>
      {/* <ThemeProvider> */}
          <StatusBar barStyle={false ? 'light-content' : 'dark-content'} backgroundColor={'red'} />
      <NavigationContainer>
        <SafeAreaView style={styles.SafeAreaView}>
          {/* <View style={{flex:1, backgroundColor:'red' } }>   */}
            <RouteNavigation/>
        </SafeAreaView>
      </NavigationContainer>
      {/* </ThemeProvider> */}
      </PaperProvider>
    </Provider>

  );
};

const styles = StyleSheet.create({
  SafeAreaView:{
    flex:1,
    backgroundColor:'red'
  },
  circle:{
    width:500,
    height:500,
    backgroundColor:'green',
    borderRadius:50,
  },
  buttonTest:{
    backgroundColor:'red',
    marginTop:'10px'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
