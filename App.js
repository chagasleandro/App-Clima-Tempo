import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import  MainCard  from './components/MainCard';



export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('23')
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
    cardView: {
      color: darkTheme ? 'black' : 'white', 
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center', 
  },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
        <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>
      <Feather name="sun" style={{marginTop: 55}} size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
      </View>

      <View style={styles.cardView}>
        <MainCard title={'Manhã'} backgroundColor={ darkTheme ? '#ff073d' : '#cc6e30'} icon={1}></MainCard>
        <MainCard title={'Tarde'} backgroundColor={ darkTheme ? '#D29600' : '#FCC63F'} icon={1}></MainCard>
        <MainCard title={'Noite'} backgroundColor={ darkTheme ? '#008081' : '#38B7B8'} icon={1}></MainCard>
      </View>
    </View>
  );
}


