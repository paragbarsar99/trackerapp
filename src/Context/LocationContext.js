//this context firl is contaning all of the Location stuff of user
//like LocationContext and Actions function like Recording function
import createDataContext from "../Context/createDataContext";

//make reducer component
const LocationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    case "reset_form":
      return { ...state, name: "", locations: [] };
    default:
      return state;
  }
};

//make action function for Location Tracking and other work's
const changeName = (dispatch) => (name) => {
  console.log(name);
  dispatch({ type: "change_name", payload: name });
};
//action for Start Recording
const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (location, recording) => {
  // console.log(`outside Recording console ${recording}`);
  dispatch({ type: "add_current_location", payload: location });
  if (recording) {
    //console.log("inside recording console " + recording);
    dispatch({ type: "add_location", payload: location });
  }
};

const reset = (dispatch) => () => {
  dispatch({ type: "reset_form" });
  
};

//passing reducer and action function in createDataCOntext

export const { Provider, Context } = createDataContext(
  LocationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { name: "", recording: false, locations: [], currentLocation: null }
);
