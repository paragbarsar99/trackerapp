//this file playing a role of hooks who's gonna make a communication between
//loaction and track context file
import { useContext } from "react";
import { Context as TrackContext } from "../Context/TrackContext";
import { Context as LocationContext } from "../Context/LocationContext";

const useTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
  };

  return [saveTrack];
};
export default useTrack;
