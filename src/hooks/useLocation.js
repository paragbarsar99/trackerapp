//this file is behaving like a resuable hook for finding the
//location as we want so it will contain the main find
//location logic here

import React, { useState, useEffect } from "react";
import { Context as LocationContext } from "../Context/LocationContext";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const {
    state: { recording },
  } = React.useContext(LocationContext);
  useEffect(() => {
    (async () => {
      const {granted} = await requestPermissionsAsync()
       if(!granted) {
         throw new Error ("Please Allow For Permission")
       }

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      )
        .then((res) => {
          if (!shouldTrack) {
            res.remove();
            
          }
        })
        .catch((err) => {
          setErr(err);
        });
    })();
  }, [shouldTrack, callback]);

  return [err];
};
export default useLocation;
