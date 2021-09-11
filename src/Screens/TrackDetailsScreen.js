import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import TrackForm from "../Components/TrackForm";
import { Context as TrackContext } from "../Context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailsScreen = ({ route }) => {
  const { state } = React.useContext(TrackContext);
  const { _id } = route.params;
  const _TName = state.find((t) => t._id === _id);
  const inititalCoords = _TName.locations[0].coords;
  console.log(_TName); //complete _id labled JSON object
  return (
    <>
    <Text style= {styles.text}>{_TName.name}</Text>
      <MapView
       style = {styles.Map}
        initialRegion={{
          ...inititalCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={_TName.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding:5
  },
  Map:{
    height:600
  }
});

export default TrackDetailsScreen;
