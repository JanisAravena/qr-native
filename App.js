import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

import React from 'react';
import AppNavigator from './navigation/navigation';

export default function App() {
  return <AppNavigator />;
}