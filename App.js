import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('28')
  const [location, setLocation] = useState('BR, Pouso Alegre')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center'
    },
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText:{
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 40,

    },
    refreshButton:{
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
        <EvilIcons name="refresh" size={24} color="black" />
      </TouchableOpacity>
      <Feather name="sun" style={{marginTop: 50}} size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
      </View>
    </View>
  );
}


