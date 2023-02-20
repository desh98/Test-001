import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput,Button, Touchable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function signup() {

  const navigation=useNavigation();
  
  return (
    
    <View style={styles.container}>

          <View>
            <Text style={styles.logintext}>SIGN UP</Text>
          </View>

          <View style={styles.login}>
          <Text style={{fontWeight:'bold'}}>Already a member?</Text>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color:'#362FD9',fontWeight:'bold',paddingBottom:14}}> Login</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.user}>
             <TextInput placeholder='Username'/>
          </View>
          
          <View style={styles.user}>
             <TextInput placeholder='E-mail or phone number'/>
          </View>

          <View style={styles.user}>
            <TextInput placeholder='Password' secureTextEntry={true}/>
          </View>

         <View style={styles.user}>
            <TextInput placeholder='Re-type password' secureTextEntry={true}/>
         </View>


         <View style={styles.Signup}>
           <Button title="SIGN UP"color="#841584"/>
         </View>

         <View style={styles.Or}>
           <Text>Or Signup with</Text>
         </View>

       
         <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}} />
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={()=>{}}>
                <Image source={require('./assets/google.png')} style={{width: 50, height: 50}} />
              </TouchableOpacity>
            </View>  
            <View style={{flex: 1}} />
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={()=>{}}>
                <Image source={require('./assets/fb.png')} style={{width: 50, height: 50}} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}} />
      
         </View>   


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:150,
    paddingHorizontal:25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    backgroundColor:'#fff',
  },

  logintext: {
    color:'#841584',
    fontSize:25,
    fontWeight:'bold',
    paddingBottom:15,
    paddingTop: 15,
  },

  user: {
   borderBottomWidth:0.5,
   paddingTop: 10,
  },


  login: {
   flexDirection:'row',
   paddingTop: 5,
  },

  Or: {
   paddingTop: 10,
   alignItems: 'center',
   fontWeight:'bold',
   paddingBottom: 20,
  },

  Lg: {
   paddingTop: 20,
   flexDirection:'row',
  },

  Signup: {
    paddingTop: 20,
  },

  Lsmpl: {
    flexDirection:'row',
    alignItems:'center',
    
  }



});