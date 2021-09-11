import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
const authreducer = (state, action) => {
  switch (action.type) {
    case "add_errormessage":
      return { ...state, errormessage: "opps...😫😫😫" };
    case "Sign_In":
      return { ...state, token: action.payload };
    case "Sign_Out":
      return { ...state, token: action.payload };
    case "clear_error_message":
      return { ...state, errormessage: "" };
    case "auto_login":
      return { ...state, token: action.payload };
    case "is_Loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
//have some action function but right now

//making a autosingin function for already login user
const autoLogin = (dispatch) => {
  return async () => {
    const res = await AsyncStorage.getItem('token');
    const token = JSON.parse(res);
    dispatch({ type: "auto_login", payload: token });
  };
};

const signUp = (dispatch) => async ({ email, password }) => {
  try {
    if (!email || !password) return;
    const response = await tracker.post("/signup", { email, password });
    const value = JSON.stringify(response.data.token); //converting response into JSON form
    await AsyncStorage.setItem("token", value);
    // const token = await AsyncStorage.getItem('token')
    dispatch({ type: "Sign_In", payload: response.data.token });
  } catch (err) {
    dispatch({
      type: "add_errormessage",
    });
    console.log(err.message);
  }
};

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const response = await tracker.post("/signin", { email, password });
    console.log(response.data);
    const value = JSON.stringify(response.data.token); //converting response into JSON form
    await AsyncStorage.setItem("token", value);
    dispatch({ type: "Sign_In", payload: response.data.token });
  } catch (err) {
    dispatch({
      type: "add_errormessage",
    });
    console.log(err.message);
  }
};

const signOut = (dispatch) => {
  return async () => {
    const rmItem = await AsyncStorage.removeItem("token");
    dispatch({ type: "Sign_Out", payload: rmItem });
  };
};

//clear error messsage component,don't remove this code please
const clearErrorMessage = (dispatch) => {
  return () => dispatch({ type: "clear_error_message" });
};

//Loading Screen
const isLoadingScreen = (dispatch) => {
  return (isLoading) => {
    //if (isLoading) return <LoadingScreen />;
    dispatch({ type: "is_Loading", payload: isLoading });
  };
};

//finally return or get the Context and provider for createDataContext component

export const { Context, Provider } = createDataContext(
  authreducer,
  { signIn, signOut, signUp, clearErrorMessage, autoLogin, isLoadingScreen },
  { token: "", errormessage: "", isLoading: true }
);
