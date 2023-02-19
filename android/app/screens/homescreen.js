import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function Homescreen({ navigation, route }) {
const {userData} = route.params

    return (
        <>
            <View>
                <Text style={{width: "100%", textAlign: 'center', fontSize: 35}}>
                    Instant Help
                </Text>

                <View>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('mapScreen', {user: userData, type: 'ambulance' ,btns: ['Medical Emergency', 'Fire', 'Accident']});
                        }}
                        style={styles.TouchableOpacity}>
                        <Text style={{color: 'white', fontSize: 20}}>Ambulance</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('mapScreen', {user: userData, type: 'fire' ,btns: ['Cylinder burst', 'Fire', 'Explosion']});
                        }}
                        style={styles.TouchableOpacity}>
                        <Text style={{color: 'white', fontSize: 20}}>Fire Brigade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('mapScreen', {user: userData, type: 'police' ,btns: ['Robbery', 'Murder', 'Harassment']});
                        }}
                        style={styles.TouchableOpacity}>
                        <Text style={{color: 'white', fontSize: 20}}>Police</Text>
                    </TouchableOpacity>

                    {
                      (userData.userInfo.authority === 'Admin')?
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('admin');
                        }}
                        style={styles.TouchableOpacity}>
                        <Text style={{color: 'white', fontSize: 20}}>Check Applications</Text>
                    </TouchableOpacity>
                    :
                    null
                      }

                </View>
            </View>
        </>
    );
}
export default Homescreen;

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