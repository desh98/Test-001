import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const navigation=useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.text1}>MoodUp</Text>
      </View>
      <View style={styles.container2}>
      <ScrollView>
      
      <Image source={img1} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>Netflix and chill</Text>
      <Image source={img2} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>Drink a coffee</Text>
      <Image source={img3} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>Listen to music</Text>
      <Image source={img1} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>Netflix and chill</Text>
      <Image source={img2} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>Drink a coffee</Text>
      <Image source={img3} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>Listen to music</Text>
      
      </ScrollView>

      </View>
      <View style={styles.container3}>
      
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  container1: {
    flex: 0.15,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container2: {
    flex: 0.75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  container3: {
    flex: 0.1,
    backgroundColor: '#fff',
  },
});

const img1 = {
  uri: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  width: 300,
  height: 250,
};

const img2 = {
  uri: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
  width: 300,
  height: 250,
};

const img3 = {
  uri: 'https://images.unsplash.com/photo-1526739178209-77cd6c6bcf4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80',
  width: 300,
  height: 250,
};

