import React, { useEffect } from "react";
import { ListItem, Text } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Context as TrackContext } from "../Context/TrackContext";
import TrackForm from "../Components/TrackForm";
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = React.useContext(TrackContext);
  const tracks = state;
  useEffect(() => {
    navigation.addListener("focus", () => {
      fetchTracks();
    });
  }, []);
 
  //console.log(tracks);
  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("TrackDetailsScreen",{
              _id:item._id
            })}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title style={styles.Itemname}>
                    {item.name}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </>
  );
 
};


const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    padding: 20,
    marginLeft: 5,
  },
  Itemname: {
    fontSize: 20,
    padding: 5,
  },
});

export default TrackListScreen;
