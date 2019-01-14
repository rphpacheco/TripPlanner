import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen/index'
import TripsScreen from './src/screens/TripsScreen/index'
import TripScreen from './src/screens/TripScreen/index'

const AppNavigator = createStackNavigator({
  Home : HomeScreen,
  Trips : TripsScreen,
  Trip : TripScreen
},
{
  initialRouteName : 'Home'
})

export default createAppContainer(AppNavigator)