// In App.js in a new project
import * as React from "react";
import { Dimensions } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/Screens/TrackDetailsScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import LoadingScreen from "./src/Screens/LoadingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as AuthProvider, Context } from "./src/Context/AuthContext";
import { Provider as LocationProvider } from "./src/Context/LocationContext";
import { Provider as TrackProvider } from "./src/Context/TrackContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");
//compoent for SignInScreen


//component of SignUpScreen

//make a StackScreen for TrackListScreen and TrackDetailsScrren
//Login Screen
const LogIn = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ title: "SignIn" }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ title: "SignUp" }}
      />
    </Stack.Navigator>
  );
};

const Tracks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackListScreen"
        component={TrackListScreen}
        options={{ title: "Track" }}
      />
      <Stack.Screen
        name="TrackDetailsScreen"
        component={TrackDetailsScreen}
        options={{ title: "PreviousTracks" }}
      />
    </Stack.Navigator>
  );
};

const CreateTracks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateTrack"
        component={TrackCreateScreen}
        options={{ title: "Create Tracks" }}
      />
    </Stack.Navigator>
  );
};
const Account = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Signout" }}
      />
    </Stack.Navigator>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelPosition: "beside-icon",
        style: {
          position: "absolute",
          borderRadius: 5,
          height: 50,
          elevation: 0,
          marginLeft: 5,
          marginRight: 5,
          justifyContent: "space-between",
          alignItems: "baseline",
        }
      }}
    >
      <Tab.Screen
        name="Tracks"
        component={Tracks}
        options={{
          title: "Tracks",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name={"map"} size={20} color={"black"} />;
          },
        }}
      />
      <Tab.Screen
        name="CreateTracks"
        component={CreateTracks}
        options={{
          tabBarBadgeStyle: {
            position: "absolute",
          },
          title: "AddTrack",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="add-circle" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarBadgeStyle: {
            position: "absolute",
          },
          title: "Signout",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name={"sign-out"} size={20} color={"black"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const { state, isLoadingScreen } = React.useContext(Context);
  const checkLoading = state.isLoading;
  React.useEffect(() => {
    setTimeout(() => {
      isLoadingScreen(false);
    }, 1000);
  }, []);

  if (checkLoading) return <LoadingScreen />;
  //console.log(state.token);
  return (
    <Stack.Navigator headerMode="none">
      {/* {state.isLoading ? <Stack.Screen name="LoadingScreen" component={LoadingScreen}/> : null} */}
      {state.token ? (
        <Stack.Screen name="TabScreen" component={TabScreen} />
      ) : (
        <Stack.Screen name="LogIn" component={LogIn} />
      )}
    </Stack.Navigator>
  );
};
//exporting with app as children of authProvider
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer>
          <App />
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

// (...)

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Home") {
//               iconName = focused
//                 ? "ios-information-circle"
//                 : "ios-information-circle-outline";
//             } else if (route.name === "Settings") {
//               iconName = focused ? "ios-list-box" : "ios-list";
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "tomato",
//           inactiveTintColor: "gray",
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
