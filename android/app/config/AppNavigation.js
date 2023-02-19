import React from 'react';
import {View, Text, Button, ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Signup from '../screens/signUp';
// import Admin from '../screens/admin';
import MapScreen from '../screens/mapScreen';
import Homescreen from '../screens/homescreen';
import Send from '../screens/send';
import Done from '../screens/done';
import Admin from '../screens/admin';
import Adminview from '../screens/adminview';




const Stack = createNativeStackNavigator();




function AppNavigation () {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login' >
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="signUp"
            component={Signup}
          />
 
          <Stack.Screen
            options={{headerShown: false}}
            name="homescreen"
            component={Homescreen}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="mapScreen"
            component={MapScreen}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="send"
            component={Send}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="done"
            component={Done}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="admin"
            component={Admin}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="adminview"
            component={Adminview}
          />


            
        </Stack.Navigator>


          



      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
