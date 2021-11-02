/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', () => {
  renderer.create(<App />);
});
