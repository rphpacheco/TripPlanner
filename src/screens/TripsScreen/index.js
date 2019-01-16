import React, { Component } from 'react'
import { View, Image, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import Trip from './Trip'
import isIphoneX from '../../utils/IsIphoneX'
import MapView from 'react-native-maps'

class TripsScreen extends Component {
    static navigationOptions = {
        header : null
    }
    state = {
        trips : []
    }
    renderItem = item => {
        return <Trip onPress = { () => this.props.navigation.navigate('Trip') } title = { item.item.name } price = { item.item.price } />
    }
    componentDidMount() {
        this.loadData()
    }
    loadData = async () => {
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS) {
            trips = JSON.parse(tripsAS)
        }
        trips.forEach((trip, index) => {
            trips[index].id = trip.id.toString()
        })
        this.setState({ trips : trips })
    }
    render() {
        const { trips } = this.state
        /*[
            { id : '1', name : 'Eurotrip 2019', price : 'R$ 5000' },
            { id : '2', name : 'Expedicão ao Atacama', price : 'R$ 3000' }
        ]*/
        return (
            <View style = {{
                flex : 1,
                justifyContent : 'space-between',
                alignItems : 'stretch'
            }}>
                <View style = {{ 
                    flex : 1
                }}>
                    <MapView 
                        style = {{
                            flex : 1
                        }}
                        initialRegion = {{
                            latitude : 37.78825,
                            longitude : -122.4324,
                            latitudeDelta : 0.0922,
                            longitudeDelta : 0.0421
                        }}
                    />
                    <TouchableOpacity onPress = { () => this.props.navigation.navigate('AddTrip') } style = {{
                        position : 'absolute',
                        bottom : 16,
                        right : 20
                    }}>
                        <Image source = { require('../../../assets/add.png') } />
                    </TouchableOpacity>
                </View>
                <View style = {{ 
                    backgroundColor : 'white' 
                }}>
                    <FlatList 
                        data = { trips }
                        renderItem = { this.renderItem }
                        horizontal
                        pagingEnabled
                        keyExtractor = { item =>  item.id }
                        style = {[
                            isIphoneX() ? { marginBottom : 20 } : null
                        ]}
                    />
                </View>
            </View>
        )
    }
}

export default TripsScreen