import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Context as AuthContext } from "../Context/AuthContext";
import Spacer from "../Components/Spacer";
import AuthForm from "../Components/authForm";
const SigninScreen = ({ navigation }) => {
  const { signIn, clearErrorMessage } = React.useContext(AuthContext);

  //making a error message disappear when screen's are switched
  React.useEffect(() => {
    const value = navigation.addListener("blur", () => {
      clearErrorMessage();
    });
    return value;
  }, [navigation]);

  return (
    <View style={styles.styleContainer}>
      <AuthForm
        headerTitle="SignIn for Tracker"
        onSubmit={signIn}
        onSubmitText="SignIn"
      />

      <TouchableOpacity
        title="Move to signup"
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={styles.SignIn}>Click Here For Create Account </Text>
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
  SignIn: {
    marginTop: 20,
    color: "blue",
    alignSelf: "center",
    fontSize: 14,
  },
  
});

export default SigninScreen;
