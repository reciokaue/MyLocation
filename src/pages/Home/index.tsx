import React from 'react';
import { useState } from 'react';
import * as Location from 'expo-location';

import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import MapView from 'react-native-maps';

import './styles';
import { styles } from './styles';

type Region = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

function Home() {
  const [ location, setLocation ] = useState<Region>()
  const [ message, setMessage ] = useState('')

  async function AskLocation(){
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMessage('Permissão para acessar a localição negada');
      return;
    }
  }
  async function GetLocation(){
    await AskLocation()

    let locationObject = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = locationObject.coords

    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.014,
      longitudeDelta: 0.014,
    });
    setMessage(`${latitude}, ${longitude}`)
  }


  return (
    <View style={styles.container}>
      <MapView initialRegion={location} style={styles.map}/>
      <View style={styles.content}>
        <Text  style={styles.message}>
          {message && 'Voce esta nas coordenadas'}{'\n'}
          {message}
        </Text>
        <RectButton style={styles.button} onPress={GetLocation}>
         <Text style={styles.text}>Achar minha localização</Text> 
        </RectButton>
      </View>
    </View>
  );
};

export default Home;
