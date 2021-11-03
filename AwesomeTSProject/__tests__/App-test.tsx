/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent, act } from '@testing-library/react-native';
import Geolocation from 'react-native-geolocation-service';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import i18n from '../i18n';
// jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('Testing react navigation', () => {
  beforeEach((()=>{
  }))


  test('clicking on change language', async () => {
    const component = (
      <App />
    );

    const { findByText } = render(component);
    const toClick = await findByText('Change Language');
      fireEvent(toClick, 'press');
    expect( i18n.language).toBe('ru');

 i18n.language
  });
  test('clicking on Go to Weather', async () => {
    jest.mock('react-native-geolocation-service');

    const component = (
      <App />
    );
    const { findByText } = render(component);
    const toClick = await findByText('Go to Weather');
      fireEvent(toClick, 'press');
    expect( findByText('Location')).toBeTruthy();

 i18n.language
  });
});