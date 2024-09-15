import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import { store } from './src/store';

import HomeScreen from './src/screens/HomeScreen';
import DeckScreen from './src/screens/DeckScreen';
import StudyScreen from './src/screens/StudyScreen';

import { RootStackParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Deck" component={DeckScreen} />
              <Stack.Screen name="Study" component={StudyScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}