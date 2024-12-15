import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import { TouchableOpacity } from 'react-native';

MapLibreGL.setAccessToken(null);

export default function App() {


  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}    
      >
        <MapLibreGL.Camera
          zoomLevel={14}
          centerCoordinate={[-122.48348236083984, 37.83317489144141]}
        />

        <MapLibreGL.MarkerView
          id="markerId"
          coordinate={[-122.48348236083984, 37.83317489144141]}
          style={styles.markerOuterStyle}
        >
          <TouchableOpacity onPress={() => console.log('Marker clicked')}>
          <View style={styles.markerContainer}>
            <Text style={styles.markerText}>★</Text>
            </View>
          </TouchableOpacity>
        </MapLibreGL.MarkerView>

      </MapLibreGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  map: {
    flex: 1
  },
  markerOuterStyle: {
    width: 46
  },
  markerContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'red',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  markerText: {
    fontSize: 23,
    lineHeight: 38,
    color: 'black',
    textAlign: 'center',
  }
});
