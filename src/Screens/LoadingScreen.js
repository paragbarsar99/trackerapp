import React from "react";
import { View, Text } from "react-native";
import {Context} from '../Context/AuthContext'
const LoadingScreen = () => {
  const {autoLogin} = React.useContext(Context);
  //const isLoading = state.isLoading
  React.useEffect(() => {
    autoLogin();
  }, []);
  //if (isLoading) return <LoadingScreen />;
  return (
    <View>
      <Text style={{ alignSelf: "center", fontSize: 20, marginVertical: 300 }}>
          Loading...
      </Text>
    </View>
  );
};

export default LoadingScreen;
