//this file is responsable for creating an tracks recorded by user
//and send theme to the our backend api and get the result back and
//so up on the user's UI
//this is a resucer function who's gonna handle all of the require action's
import createDataContext from "../Context/createDataContext";
import instance from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  await instance
    .get("/tracks")
    .then((res) => {
      dispatch({ type: "fetch", payload: res.data });
    })
    .catch((err) => {
      console.log(`Error in feetching track ${err}`);
    });
};
const createTrack = (dispatch) => async (name, locations) => {
  try {
    await instance.post("/tracks", { name, locations });
  } catch (e) {
    console.log(e + " error is here in post request");
  }
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
