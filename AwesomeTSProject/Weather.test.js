// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import App from './App';

// Примечание: визуализатор теста следует импортировать после react-native.
import renderer from 'react-test-renderer';

test('отображается корректно', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});