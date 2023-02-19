import React, { useState } from 'react';

import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Done({ navigation, route }) {

const {userData} = route.params

  return (
    <View >
      <View>

        <View>
          <Text
          style={{width: "100%", textAlign: 'center', fontSize: 35}}>
          Application submitted
          </Text>
        </View>

        <View>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('homescreen', userData)}}
        style={styles.TouchableOpacity}>
            <Text style={{color: 'white', fontSize: 20}}>Go back to Homepage</Text>
    </TouchableOpacity>
            </View>



      </View>
    </View>

  );
}

export default Done;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    marginTop: 80,
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '500',
  },
  input: {
    width: '97%',
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  TouchableOpacity: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9B59B6',
      padding: 15,
      width: '80%',
    },
});