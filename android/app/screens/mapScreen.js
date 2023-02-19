import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';

function MapScreen({ navigation, route }) {
  const [location, setLocation] = React.useState('');
  const {btns, user, type} = route.params

  useEffect(() => {
    Geolocation.getCurrentPosition(p => setLocation(p));

  }, []);



  return (
location &&
    <View >
      <View>

        <View>
          <Text
          style={{width: "100%", textAlign: 'center', fontSize: 35}}>
          Tell us your Emergency
          </Text>
        </View>

        {btns.map((e, i)=>{
    return(
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('send', {type: type, location: location, user: user})
        }}
        style={styles.TouchableOpacity}>
        <Text style={{color: 'white', fontSize: 20}} key={i}>{e}</Text>
    </TouchableOpacity>
    )
})}


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
            title="Pick your location"
            description="Help will be sent to your location"
          />
        </MapView>
      )}
    </View>

  );
}

export default MapScreen;

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