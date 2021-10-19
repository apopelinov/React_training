import React from 'react';
import { Button,Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route:any;
};
const getMovies = async () => {
  try {
   const response = await fetch('https://reactnative.dev/movies.json');
   const json = await response.json();
   console.log(json);
  //  setData(json.movies);
 } catch (error) {
   console.error(error);
 } finally {
  //  setLoading(false);
 }
}
const getWeather = async () => {
  try {
   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=b4b675963f07c6637d013a1e5edc1066');
   const json = await response.json();
   console.log(json);
  //  setData(json.movies);
 } catch (error) {
   console.error(error);
 } finally {
  //  setLoading(false);
 }
}
const ProfileScreen = ({ navigation, route }: Props) => {
  return (
  
    <Button
    onPress={() => {
      getWeather();
    }}
    title="Press Me"
  />
  
  )
};
export default ProfileScreen;