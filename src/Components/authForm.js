import React, { useState } from "react";
import { Button, Input, Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import {Context as AuthContext} from '../Context/AuthContext';
//this component is making for reducing the size of our component
const AuthForm = ({ headerTitle, onSubmit, onSubmitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = React.useContext(AuthContext);
  return (
    <>
      <Text style={styles.title}> {headerTitle} </Text>

      <Input
        style={styles.name}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      ></Input>

      <Input
        secureTextEntry
        style={styles.password}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      ></Input>

      <Button
        style={styles.button}
        title={onSubmitText}
        onPress={() => onSubmit({ email, password })}
      ></Button>
       {/* showing some error meassage during anything wrong happen */}
      {state.errormessage ? (
        <Text style={styles.errormessage}> {state.errormessage} </Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 10,
    alignSelf: "center",
  },
  name: {
    margin: 5,
    padding: 10,
  },
  password: {
    margin: 5,
    padding: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 2,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  errormessage: {
    marginVertical: 30,
    alignSelf: "center",
    color: "gray",
    fontSize: 20,
  }
});

export default AuthForm;
