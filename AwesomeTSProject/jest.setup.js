jest.mock('./node_modules/react-native-gesture-handler/src/RNGestureHandlerModule', () => require('./node_modules/react-native-gesture-handler/src/mocks'));
jest.mock('./node_modules/react-native-gesture-handler/lib/commonjs/RNGestureHandlerModule', () =>
  require('./node_modules/react-native-gesture-handler/lib/commonjs/mocks')
);
jest.mock('./node_modules/react-native-gesture-handler/lib/module/RNGestureHandlerModule', () =>
  require('./node_modules/react-native-gesture-handler/lib/module/mocks')
);
