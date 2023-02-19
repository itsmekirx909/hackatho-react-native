import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

function Login({navigation}) {
  const [loader, setLoader] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  const login = () => {
    setLoader(true);

    if(!email || !password){
seterror('Fill the fields first')
setLoader(false)
setTimeout(()=>{
  seterror('')
}, 5000)
return;
    }

    const obj = {
      email: email,
      password: password
    }

axios.post('https://frightened-plum-woodpecker.cyclic.app/api/login', obj)
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

navigation.navigate('homescreen', {userData:s.data})

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

  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <View style={{width: '90%', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'left',
              width: '87%',
              fontSize: 35,
              fontWeight: 'bold'
            }}
          >
            Welcome to SQuiP
          </Text>
          <Text
            style={{
              textAlign: 'left',
              width: '87%',
              fontSize: 16,
            }}
          >
            Login to keep the country safe
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
            onChangeText={e => setemail(e)}
            placeholder="Enter Your Email"
            style={[styles.textInput, {width: '90%', borderColor: 'black'}]}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}
        >
          <TextInput
            secureTextEntry={true}
            onChangeText={e => setpassword(e)}
            placeholder="Enter Your Password"
            style={[styles.textInput, {width: '90%', borderColor: 'black'}]}
          />
        </View>
        <TouchableOpacity onPress={login} style={styles.TouchableOpacity}>
          {loader ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Text style={styles.text}>Login</Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#9B59B6',
              fontSize: 16,
              textAlign: 'center',
              justifyContent: 'flex-end',
              fontWeight: '800',
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'flex-end', marginLeft: 4}}
            onPress={() => navigation.navigate('signUp')}
          >
            <Text style={{ fontWeight: '700', fontSize: 16}}>
              SignUp
            </Text>
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
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white'
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    height: 60,
    fontSize: 18,
  },
  TouchableOpacity: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9B59B6',
    padding: 15,
    width: '80%',
  },
});
