rm -rf node_modules
npm i
cd ios
pod install
cd ..
npx react-native run-ios --device
npx react-native start