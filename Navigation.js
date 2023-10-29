import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import BottomBar from './BottomBar';
import Signup from '../screens/Signup';
import LPass from '../screens/LPass';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Pass from '../screens/Pass';
import Email from '../screens/Email';

const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator >
          <Stack.Screen options={{headerShown: false}} name="BottomBar" component={BottomBar} />  
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} /> 
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} /> 
          <Stack.Screen options={{headerShown: false}} name="LPass" component={LPass} />
          <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
          <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
          <Stack.Screen options={{headerShown: false}} name="Pass" component={Pass} />
          <Stack.Screen options={{headerShown: false}} name="Email" component={Email} />
      </Stack.Navigator>
      
  );
}

export default Navigation;