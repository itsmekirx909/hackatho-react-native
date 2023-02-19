

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppNavigation from './android/app/config/AppNavigation';
import axios from 'axios'



const App   = () => {
  
  return (
    <View  style={{backgroundColor:"white",width:"100%",height:"100%"}} >
      
        <AppNavigation/>
      
    </View>
  );
};



export default App;
