import React from 'react';
import { Button,Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from "react-i18next";
import  '../../i18n';


type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Weather: undefined; 

  
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route:any;
};

const HomeScreen = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <View>
              <Button
      title={t('main.ToWeather')}
      onPress={() =>
        navigation.navigate('Weather')
      }
    />
  <Button
      title={t('main.ChangeLang')}
      onPress={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
    />
    </View>

    
  );
};

export default HomeScreen;