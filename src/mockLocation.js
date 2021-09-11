import * as Location from 'expo-location';

//import {Context as LocationContext} from './Context/LocationContext'

const tenMetersWithDegrees = 0.0001;
const getLocation = increment => {
  //const {state:{recording}} = React.useContext(LocationContext) 
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 76.7458579 + increment * tenMetersWithDegrees,
      latitude: 27.4758699 + increment * tenMetersWithDegrees
    },
    
    };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
