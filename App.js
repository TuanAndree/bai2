import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import CustomNavigationBar from './src/CustomNavigationBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          header: (prop) => <CustomNavigationBar {...prop} />,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


