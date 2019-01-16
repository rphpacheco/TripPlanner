import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import styles from './styles'

class AddPointScreen extends Component {
    static navigationOptions = {
        header : null
    }
    state = {
        position : {
            latitude : 37.78825,
            longitude : -122.4324
        },
        pointName : '',
        description : '',
        price : 0
    }
    renderItem = item => {
        return (
            <View style = { styles.item }>
                <View style = { styles.wrapperInfo }>
                    <Text style = { styles.itemName }>{ item.item.name }</Text>
                    <Text>{ item.item.description }</Text>
                </View>
                <View style = { styles.wrapperItemPrice }>
                    <Text style = { styles.itemPrice }>{ item.item.price }</Text>
                </View>
            </View>
        )
    }
    handleDelete = async () => {
        await AsyncStorage.removeItem('trips')
    }
    handleSave = async () => {
        const id = 1547646756387
        //console.log('id trip', this.props.navigation.state.params.id)
        const pointsAS = await AsyncStorage.getItem('trip-'+id)
        let points = []
        if(pointsAS) {
            points = JSON.parse(pointsAS)
        }
        points.push(this.state)
        await AsyncStorage.setItem('trip-'+id, JSON.stringify(points))

        let total = 0
        points.forEach( p => {
            total += p.price
        })

        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS) {
            trips = JSON.parse(tripsAS)
        }
        trips.forEach((trip, index) => {
            if(trip.id === id) {
                trips[index].price = total
                trips[index].latitude = points[0].position.latitude
                trips[index].longitude = points[0].position.longitude
            }
        })
        console.log(trips)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
    }
    render () {
        return (
            <View style = { styles.wrapper }>
                <MapView style = {{
                    flex : 1
                }} initialRegion = {{
                    latitude : 37.78825,
                    longitude : -122.4324,
                    latitudeDelta : 0.0922,
                    longitudeDelta : 0.0421
                }}>
                    <TouchableOpacity style = { styles.backButton } onPress = { () => this.props.navigation.goBack() }>
                        <Image source = { require('../../../assets/arrow-left.png') } />
                    </TouchableOpacity>
                
                    <Marker 
                        coordinate = {{
                            latitude : 37.78825,
                            longitude : -122.4324
                        }}
                        onDragEnd={
                            (evt) => this.setState({ position : evt.nativeEvent.coordinate })
                        }
                        draggable
                    />
                </MapView>
                
                <View style = { styles.backButton }>
                    
                </View>
                <TextInput style = { styles.input } placeholder = 'Nome do ponto' onChangeText = { txt => this.setState({ pointName : txt }) } />
                <TextInput style = { styles.input } placeholder = 'Descrição' onChangeText = { txt => this.setState({ description : txt }) } />
                <TextInput style = { styles.input } placeholder = 'Preço' onChangeText = { txt => this.setState({ price : parseFloat(txt) }) } />
                <TouchableOpacity style = { styles.btn } onPress = { this.handleSave }>
                        <Text>Salvar ponto</Text>
                </TouchableOpacity>
                <TouchableOpacity style = { styles.btn } onPress = { this.handleDelete }>
                        <Text>Deletar storage</Text>
                </TouchableOpacity>
                <View style = {{ flex : 1 }}></View>
            </View>
        )
    }
}

export default AddPointScreen