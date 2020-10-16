import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../img/map-marker.png';

export default function OrphanagesMap() {

    const navigation = useNavigation();

    function navigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails');
    }


    function navigateToCreateOrphanage() {
      navigation.navigate('SelectMapPosition');
   }

    return (
        <View style={styles.container}>
            <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
                latitude: -15.8138368,
                longitude: -47.9110414,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
            }} 
            >
                <Marker 
                    icon={mapMarker}
                    coordinate={{
                    latitude: -15.8138368,
                    longitude: -47.9110414,
                    }}
                    calloutAnchor={{
                    x: 2.7,
                    y: 0.8
                    }}
                >
                    <Callout 
                    tooltip
                    onPress={navigateToOrphanageDetails}  
                    >
                    <View style={styles.calloutContainer}>
                        <Text style={styles.calloutText}>
                        Orfanato teste
                        </Text>
                    </View>
                    </Callout>
                </Marker>
            </MapView>
    
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    2 orfanatos encontrados
                </Text>
    
                <TouchableOpacity
                    style={styles.createOrphanageButton}
                    onPress={navigateToCreateOrphanage}
                >
                    <Feather 
                    name="plus"
                    size={20}
                    color="#FFF"
                    />
                </TouchableOpacity>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center'
    },
  
    calloutText: {
      color: '#0089A5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold'
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3
    },
  
    footerText: {
      color: '#8FA7B3',
      fontFamily: 'Nunito_700Bold'
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15C5D6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });