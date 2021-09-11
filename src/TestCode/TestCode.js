/*Test code for future purpose
//console.log(location)
  // // const callback = addLocation(location,state.recording)
  // // const callback =  useCallback((location) => {
  // //     addLocation(location, state.recording);
  // //   },
  // //  [state.recording]
  // // )
   // const [err] = useLocation(isFocused,state.recording );
  console.log("loaction 1 " + state.locations  );
  console.log("are we recording " + state.recording )
 
   */

/* ******My code Please Don't Touch it*******************
   const watchTracker = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 3000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location, recording);
          console.log(`recording value inside from TrackCreate : ${recording}`);
        }
      );
      if (sub) {
        navigation.addListener("blur", () => {
          sub.remove();
        });
      }
    } catch (e) {
      setErr(e);
    }
  };
  
   */

/*
   ********Test Code***************
   //  console.log(subscriber);
  // useEffect(() => {
  //   const value = navigation.addListener("focus", () => {
  //     watchTracker();
  //   });
  //   return value;
  // }, [navigation]);

  // useEffect(()=>{
  //   )

  //useEffect(() => subscriber.remove())

  // useEffect(() => {
  //    watchTracker();
  // })

  // useCallback(() =>{
  //   if(isFocused){
  //     startWatching();
  //   }else{
  //     subscriber.remove();
  //     setSubscriber(null)
  //   }
  // },[isFocused])
    
   */
