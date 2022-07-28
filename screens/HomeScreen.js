import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Polygon, Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Component } from "react/cjs/react.production.min";


export default class Map extends Component {
  state = {
    coordinates: [
      { name: '1', latitude: 34.07225, longitude: -118.293683 },
      { name: '2', latitude: 34.06235, longitude: -118.243683 },
      { name: '3', latitude: 34.0525, longitude: -118.233683 },
      { name: '4', latitude: 34.042235, longitude: -118.223683 },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 34.052235,
            longitude: -118.243683,
            latitudeDelta: 0.06,
            longitudeDelta: 0.015,
          }}>
          <Polygon coordinates={this.state.coordinates} fillColor={'rgba(51, 170, 51,  .6)'}></Polygon>
          <Marker
            coordinate={{ latitude: 34.052235, longitude: -118.243683 }}>
            <Callout>
              <Image source={require('./img/download.png')}></Image>
              <Text>Snap Park in Los Angeles</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});
