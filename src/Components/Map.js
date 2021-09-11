import React, { useContext, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../Context/LocationContext";
//in this component we are going to make a component for showing
//Map on to TrackCreate Screen
const { width, height } = Dimensions.get("window");
console.log(width, height);

const Map = () => {
  const {
    state: { currentLocation,locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <View style={styles.containor}>
        <ActivityIndicator
          size="large"
          style={{ marginTop: 300 }}
          color="#00000"
        />
      </View>
    );
  }

  return (
    <MapView
      style={styles.Map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta:0.04,
        longitudeDelta:0.05,
      }}

      // region = {{
      //   ...currentLocation.coords,
      //   latitudeDelta:0.01,
      //   longitudeDelta:0.01,
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />

     <Polyline  coordinates = {locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  Map: {
    width: 400,
    height: 200,
  },
  containor: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Map;
