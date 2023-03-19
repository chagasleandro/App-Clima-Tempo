import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

const MainCard = (props) => {

    const styles = StyleSheet.create({
        
        card:{
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            
            borderRadius: 20,
            margin: 10,
            width: 110,
            height: 210,
        },
        refreshButton:{
            position: 'absolute',
            margin: 30,
            alignSelf: 'flex-start',
        }
      });

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Manhã</Text>
            <Feather name="sun" style={{marginTop: 55}} size={40} color="orange" />
            <Text style={styles.temperatureText}>21°c</Text>
        </View>
    )
}

export default MainCard;