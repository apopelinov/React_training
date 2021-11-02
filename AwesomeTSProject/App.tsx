import * as React from 'react';
import { View, Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import WeatherScreen from './src/screens/Weather';
import './i18n';

import { createStackNavigator } from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
};



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomeScreen" }}
        /> 
         {/* <Stack.Screen name="Weather" component={WeatherScreen} />  */}

              </Stack.Navigator>
              
    </NavigationContainer>
  );
}

export default App;
