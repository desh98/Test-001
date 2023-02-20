import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput,Button, Touchable, TouchableOpacity} from 'react-native';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Moodup from './screens/Moodup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Moodup" component={Moodup} />
            </Stack.Navigator>
        </NavigationContainer>
  
    );
  }