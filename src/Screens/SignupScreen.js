import React, { useState } from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
//import {NavigationEvents} from 'react-navigation'
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../Context/AuthContext";
import AuthForm from "../Components/authForm";
const SignupScreen = ({ navigation }) => {
  const { state, signUp, clearErrorMessage } = React.useContext(AuthContext);

  //{  this code shall be use for other perpous so please don't remove it
  React.useEffect(() => {
    const value = navigation.addListener("blur", () => {
      clearErrorMessage()
    });
    return value;
  }, [navigation]);

  return (
    <View style={styles.styleContainer}>
      <AuthForm
        headerTitle="SignUp for Tracker"
        onSubmit={signUp}
        onSubmitText="SignUp"
      />
      <TouchableOpacity
        title="Have an Account?"
        onPress={() => {
          navigation.navigate("SigninScreen");
        }}
      >
        <Text style={styles.SignUp}> Have a Account? Login Here </Text>
      </TouchableOpacity>

      </View>
  );
};

const styles = StyleSheet.create({
  styleContainer: {
    justifyContent: "center",
    marginBottom: 150,
    flex: 1,
  },
  SignUp: {
    marginTop: 20,
    color: "blue",
    alignSelf: "center",
    fontSize: 14,
  },
  errormessage: {
    marginVertical: 30,
    alignSelf: "center",
    color: "gray",
    fontSize: 20,
  },
});

export default SignupScreen;

/*  
  headerTitle,
  onSubmit,
  onSubmitText,
  errorMessage,
  navigation, */
