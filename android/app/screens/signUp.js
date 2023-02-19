import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  Alert,
  ActivityIndicator
} from 'react-native';
import axios from 'axios'





function SignUp({navigation}) {

  const [loader,setLoader] = useState(false)
  const [userName,setuserName] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [confirmPassword,setconfirmPassword] = useState('')
  const [phoneNo,setphoneNo] = useState('')
  const [error, seterror] = useState('');

  const signup = async ()=>{
setLoader(true)

if(!userName || !email || !password || !confirmPassword || !phoneNo){
  seterror('Fill the fields first')
  setLoader(false)
  setTimeout(()=>{
    seterror('')
  }, 5000)
  return;
}

setphoneNo(phoneNo.Number)

if(phoneNo == isNaN){
  seterror('Invalid value in phone number')
  setLoader(false)
  setTimeout(()=>{
    seterror('')
  }, 5000)
  return;
}

const obj = {
  userName: userName,
  email: email,
  password: password,
  confirmPassword: confirmPassword,
  phoneNo, phoneNo
}

axios.post('https://frightened-plum-woodpecker.cyclic.app/api/signup', obj)
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



  }
      


  return ( 
    <View style={styles.container} >
        
     <View style={{width:"100%",height:"100%",justifyContent:"center"}} >
     <View style={{justifyContent:"flex-start",height:"75%"}} >
     
    <View style={{width:"90%",alignItems:"center"}} >
    <Text style={{textAlign:"left",width:"87%",fontSize:35}} >
        Sign Up!
    </Text>
    <Text style={{textAlign:"left",width:"87%",fontSize:15}} >
        Register to keep the country safe
    </Text>
    </View>

   <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}} >
   
   <TextInput onChangeText={(e)=>setuserName(e)} placeholder='Enter User Name' 
    style={[styles.textInput,{width:"90%", borderColor: 'black'}]} />
   </View>

    <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}} >
   
    <TextInput onChangeText={(e)=>setemail(e)} placeholder='Enter Your Email' 
    style={[styles.textInput,{width:"90%", borderColor: 'black'}]} />
    </View>
    <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}} >
   
    <TextInput secureTextEntry={true}  onChangeText={(e)=>setpassword(e)} placeholder='Enter Your Password' style={[styles.textInput,{width:"90%", borderColor: 'black'}]} />
    </View>

    <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}} >
   
    <TextInput secureTextEntry={true}  onChangeText={(e)=>setconfirmPassword(e)} placeholder='Confirm Your Password' style={[styles.textInput,{width:"90%", borderColor: 'black'}]} />
    </View>

    <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}} >
   
   <TextInput onChangeText={(e)=>setphoneNo(e)} placeholder='Enter Phone Number' style={[styles.textInput,{width:"90%", borderColor: 'black'}]} />
   </View>


    <TouchableOpacity onPress={signup} style={styles.TouchableOpacity} >
    {loader?<ActivityIndicator size={'large'} color="black"  />
    :
    <Text style={styles.text} >SignUp</Text>
  }
    </TouchableOpacity>
  
    <View style={{width:"100%",alignItems:"center",marginTop:20,flexDirection:"row",justifyContent:"center"}} >
    <Text style={{color:"#9B59B6",fontSize:16,textAlign:"center",justifyContent:"flex-end",fontWeight:"800"}} >
        already have an account?  
    </Text>
    <TouchableOpacity style={{justifyContent:"flex-end",marginLeft:4}} onPress={()=>navigation.navigate('login')}  >
            <Text style={{fontWeight:"700",fontSize:16}} >Login</Text>
    </TouchableOpacity>
    </View>
    </View>

    <View>
          <Text
            style={{
              color: 'red',
              fontSize: 16,
              textAlign: 'center',
              fontWeight: '500',
              marginTop: 20
            }}
          >
            {error}
          </Text>
        </View>

    </View>
    
    </View>
)
}

  
export default SignUp;

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
