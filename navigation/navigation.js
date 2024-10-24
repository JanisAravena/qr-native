import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from '../components/QrScanner';
import Bienvenido from '../components/Bienvenido';
import SendInvitation from '../components/SendInvitation';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SendInvitation">
      <Stack.Screen name="SendInvitation" component={SendInvitation} />
      <Stack.Screen name="QrScanner" component={QrScanner} />
      <Stack.Screen name="Bienvenido" component={Bienvenido} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;