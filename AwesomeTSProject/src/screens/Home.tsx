import React from 'react';
import { Button,Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from "react-i18next";
import  '../../i18n';


type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
  Weather: undefined; 
  Translate: undefined; 

  
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route:any;
};

const ProfileScreen = ({ navigation, route }: Props) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const HomeScreen = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <View>
          <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
              <Button
      title={t('main.ToWeather')}
      onPress={() =>
        navigation.navigate('Weather')
      }
    />
                  <Button
      title="Go to Translate"
      onPress={() =>
        navigation.navigate('Translate')
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