import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput,Button, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const navigation= useNavigation();
  return (
    
    <View style={styles.container}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/login.jpg')} style={{width: 200, height: 200}} />
          </View>
          <View>
            <Text style={styles.logintext}>LOGIN </Text>
          </View>

          <View style={styles.user}>
             <TextInput placeholder='E-mail or phone number'/>
          </View>

        <View style={styles.user}>
            <TextInput placeholder='Password' secureTextEntry={true}/>
         </View>

        <View style={styles.forgot}>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color:'#362FD9',fontWeight:'bold',paddingBottom:14}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Button title="Login"color="#841584"/>
        </View>

        <View style={styles.Register}>
          <Text style={{fontWeight:'bold'}}>Or</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
            <Text style={{color:'#362FD9',fontWeight:'bold',paddingBottom:14}}> Register Here</Text>
          </TouchableOpacity>
        </View>

              

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:80,
    paddingHorizontal:25,
    justifyContent: 'center',
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
 

  forgot: {
    alignItems:'flex-end',
    fontWeight:'bold',
    paddingTop: 5,
    
   },

   Register: {
    flexDirection:'row',
    paddingTop: 5,

    
   },



});