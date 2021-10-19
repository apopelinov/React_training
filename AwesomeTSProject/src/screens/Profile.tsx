import React, { useState } from 'react';
import { Button,Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service';

type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type Position = {
  latitude:string;
  longitude:string;
  city:string;
};
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
const getWeatherWithCoord = async (location:Position) => {
  try {
   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&appid=b4b675963f07c6637d013a1e5edc1066');
   const json = await response.json();
   console.log(json);
   console.log(location);
   location.city=json.name;
 } catch (error) {
   console.error(error);
 } finally {
 }
}
const getLocation = async (location:Position) => {
  try {
    Geolocation.getCurrentPosition((position) => { 
      console.log(position); 
      
      location.latitude=position.coords.latitude.toString();
      location.longitude=position.coords.longitude.toString();
      console.log(location); 

  }, (error) => { 
      console.log(error.code, error.message); 
      if (error.code==1)
      {
        Geolocation.requestAuthorization("whenInUse")
      }
  }, { 
      enableHighAccuracy: true, 
      timeout: 10000, 
      maximumAge: 10000 
  }); 
 } catch (error) {
   console.error(error);
 } finally {
  //  setLoading(false);
 }
}
const ProfileScreen = ({ navigation, route }: Props) => {
  const [poss] = useState<Position>({latitude:'',longitude:'',city:'' });
  return (
    <View>

    <Button
    onPress={() => {
      getWeatherWithCoord(poss);
    }}
    title="get weather"
  />
  <Button
  onPress={() => {
    getLocation(poss);
  }}
  title="get location"
/>
<Text>This is {poss.city}'s profile</Text>
</View>
  )
};
export default ProfileScreen;