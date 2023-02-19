import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

function Send({ navigation, route }) {
  const [loader, setLoader] = useState(false);
  const {location, type, user} = route.params
    const [description, setdescription] = useState('')
    const [error, seterror] = useState('')

    const dbSend = ()=>{
        if(!description){
            seterror('Fill the description first')
            setLoader(false)
            setTimeout(()=>{
              seterror('')
            }, 5000)
            return;
        }

        const status = 'Not Completed'

        const obj = {
            userId: user.userInfo._id,
            emergency: description,
            location,
            type,
            status
        }

        axios.post(`https://frightened-plum-woodpecker.cyclic.app/api/emergency/${type}`, obj)
        .then((s)=>{
            console.log(s.data)
          setLoader(false)
          
          if(!s.data.status){
            seterror(s.data.message)
            setLoader(false)
            setTimeout(()=>{
              seterror('')
            }, 5000)
            return;
          }
          
          navigation.navigate('done', {userData: user})
          
          
          })
          .catch((e)=>{
            console.log(e.message)
             setLoader(false)
             seterror('error')
             setLoader(false)
             setTimeout(()=>{
               seterror('')
             }, 5000)
             return;
            })

    }


  return (
    <View >
      <View>

        <View>
          <Text
          style={{width: "100%", textAlign: 'center', fontSize: 35}}>
          Describe more about you emergency
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}
        >
          <TextInput
            onChangeText={e => setdescription(e)}
            placeholder="Enter Description"
            style={styles.input}
          />
        </View>

        <View>
        <TouchableOpacity
        onPress={dbSend}
        style={styles.TouchableOpacity}>

{loader ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
          )}

    </TouchableOpacity>
            </View>

            <View>
          <Text
            style={{
              color: 'red',
              fontSize: 16,
              textAlign: 'center',
              justifyContent: 'flex-end',
              fontWeight: '500',
            }}
          >
            {error}
          </Text>
        </View>

      </View>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: '100%', height: '100%', }}
          region={{
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            title="Your location"
            description="Help will be sent to your location"
          />
        </MapView>
      )}
    </View>

  );
}

export default Send;

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