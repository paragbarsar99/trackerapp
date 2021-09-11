import "../mockLocation";
import React, { useContext, useCallback, useState, useEffect } from "react";
import { withNavigationFocus } from "@react-navigation/compat";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../Components/Map";
import { Context as LocationContext } from "../Context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../Components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {

  const { state,addLocation } = useContext(LocationContext);
  // console.log(state.locations.length)

  const callback = useCallback((location) => {
   addLocation(location,state.recording);
  }, [state.recording]);

  const [err] = useLocation(isFocused || state.recording, callback);
 
  return (
    <>
      <Map />
      {err ? <Text>Please Allow For Location Permission</Text> : null}
      <TrackForm />
      
    </>
  );
  
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

