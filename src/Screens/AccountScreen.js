import React from "react";
import { View, StyleSheet} from "react-native";
import {Text,Button} from 'react-native-elements'
import { Context } from "../Context/AuthContext";

const AccountScreen = ({ navigation }) => {
  const { state, signOut } = React.useContext(Context);
  console.log("");
  return (
    <View>
      <Button title="SignOut" onPress={() => signOut()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
