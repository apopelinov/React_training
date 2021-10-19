import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service';
const WeatherScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [poss] = useState<Position>({latitude:'',longitude:'',city:'',weather:'',humidity:'',temp:0,wind:'',pressure:'' });
  type Position = {
    latitude:string;
    longitude:string;
    city:string;
    weather:string;
    humidity:string;
    temp:number;
    wind:string;
    pressure:string;

  };
const getWeatherWithCoord = async (location:Position) => {
  try {
    console.log('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&appid=b4b675963f07c6637d013a1e5edc1066')
   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&appid=b4b675963f07c6637d013a1e5edc1066');
   const json = await response.json();
   console.log(json);
   console.log(location);
   location.city=json.name;
   location.weather=json.weather[0].main;
   location.humidity=json.main.humidity;
      location.temp=parseInt(json.main.temp)-273;  
   location.wind=json.wind.speed;
   location.pressure=json.main.pressure;
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}
const getLocationWeather = async (location:Position) => {
  try {
   await Geolocation.getCurrentPosition((position) => { 
      console.log(position); 
      location.latitude=position.coords.latitude.toString();
      location.longitude=position.coords.longitude.toString();
      console.log(location); 
      getWeatherWithCoord(poss);
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
  useEffect(() => {

    const getWeth = async () => {
      await getLocationWeather(poss);
    }
    getWeth();
  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>

    {isLoading ? <ActivityIndicator/> : (  
      <View>
        <Text>Location: {poss.city}</Text>
        <Text>Temperature:{poss.temp}°C</Text>
        <Text>Humidity:{poss.humidity}%</Text>
        <Text>Weather: {poss.weather}</Text>
        <Text>Wind: {poss.wind} m/s</Text>

      </View>
        
      )
    }
</View>
  );
};

export default WeatherScreen;