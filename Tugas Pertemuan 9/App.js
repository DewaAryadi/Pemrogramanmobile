import * as React from 'react';
import { 
  View, 
  Text 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './components/home';
import login from './components/login';
import signup from './components/signup';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" 
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>
        <Stack.Screen name="Home" component={home} options={
          { title: 'Homescreen' },
          { headerLeft: null }
        }/>
        <Stack.Screen name="Login" component={login} options={
          { title: 'Login' },
          { headerLeft: null }
        }/>
        <Stack.Screen name="Signup" component={signup} options={
          { title: 'Signup' },
          { headerLeft: null }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;