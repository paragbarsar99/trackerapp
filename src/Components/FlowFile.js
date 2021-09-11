//this context firl is contaning all of the Location stuff of user
//like LocationContext and Actions function like Recording function 
//this file is making a visual flow of our app's current stats
/*                     * * * * * * * * *  * 
                      * Location    Provider*
                      *  currentlocation   *  
   ⬅ ⬅ ⬅ ⬅  ⬅ ⬅  *    locations       *
  ⬇                    *    recording       *
  ⬇                     *  * * * * * * * * * *  
  ⬇                            ⬇
  ⬇                           ⬇
c ⬇                           ⬇
u ⬇                           ⬇              callback
r ⬇                     TrackCreateScreen ➡ ➡ ➡ ➡ ➡ ➡ ➡ ➡   userLocation 
r ⬇                           ⬇           ⬅  ⬅ ⬅ ⬅ ⬅  ⬅ ⬅  it is a reducable 
e ⬇                           ⬇                                hook manage location update
n ⬇                 ⬅ ⬅ ⬅ ⬅ ⬇  ➡ ➡ ➡ 
t ⬇                ⬇                     ⬇
L ⬇                ⬇                     ⬇
o ⬇ ➡ ➡ ➡ ➡ ➡ Map                  TrackForm
cation                 
           */                    