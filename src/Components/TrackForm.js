import Spacer from "./Spacer";
import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../Context/LocationContext";
import useTrack from "../hooks/useTrack";
import { Context as TrackContext } from "../Context/TrackContext";
import { useNavigation } from '@react-navigation/native'
const TrackForm = () => {
  const  navigation = useNavigation();
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const { fetchTrack } = useContext(TrackContext);
  const [saveTrack] = useTrack();
  console.log(locations.length);
  // console.log(name);
  // console.log(`trackform recording :${recording}` );
  return (
    <>
      <Input value={name} onChangeText={changeName} placeholder="Enter name" />

      {recording ? (
        <Button title="Stop" onPress={stopRecording}></Button>
      ) : (
        <Button title="Start Recording" onPress={startRecording}></Button>
      )}

      {!recording && locations.length ? (
        <Button
          title="Save Location"
          onPress={() => {
            saveTrack();
            navigation.navigate('TrackListScreen');
              }}
        ></Button>
      ) : null}
    </>
  );
};

export default TrackForm;
