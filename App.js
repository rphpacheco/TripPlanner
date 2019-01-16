import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen/index'
import TripsScreen from './src/screens/TripsScreen/index'
import TripScreen from './src/screens/TripScreen/index'
import AddTripScreen from './src/screens/AddTripScreen/index'
import AddPointScreen from './src/screens/AddPointScreen/index'
const AppNavigator = createStackNavigator({
  Home : HomeScreen,
  Trips : TripsScreen,
  Trip : TripScreen,
  AddPoint : AddPointScreen,
  AddTrip : AddTripScreen
},
{
  initialRouteName : 'Trips'
})

export default createAppContainer(AppNavigator)