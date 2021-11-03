/**
 * @format
 */

import 'react-native';
import React from 'react';
import WeatherScreen from '../src/screens/Weather';
import { renderHook } from '@testing-library/react-hooks';
import { useTranslation } from "react-i18next";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers();
//  jest.mock('fetch');

it('useTranslation', () => {
    const { result } = renderHook(() =>
        useTranslation(),
    );
    const { t } = result.current;
    expect(t('main.ToWeather')).toBe('Go to Weather');
});
// test('the data is peanut butter', done => {
//     function callback(data) {
//       try {
//         expect(data).toBe('peanut butter');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
  
//     fetchData(callback);
//   });
it('renders correctly', () => {
    renderer.create(<WeatherScreen />);
});
