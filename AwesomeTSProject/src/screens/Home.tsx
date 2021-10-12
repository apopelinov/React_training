import React from 'react';
import { Button } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';



const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};

export default HomeScreen;