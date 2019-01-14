import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrapper : {
        flex : 1
    },
    header :{
        position : 'absolute',
        top : 26,
        left : 16,
        zIndex : 100
    },
    backButton : {
        height : 246,
        backgroundColor : 'grey'
    },
    tripName : {
        position : 'absolute',
        left : 16,
        bottom : 16
    },
    tripPrice : {
        position : 'absolute',
        bottom : 16,
        right : 32,
        textAlign : 'right',
        backgroundColor : '#35727A',
        paddingBottom : 4,
        paddingLeft : 4,
        paddingRight : 4,
        paddingTop : 4,
        color : 'white'
    },
    wrapperList : {
        flex : 1
    },
    list : {
        paddingTop : 16,
        paddingLeft : 16
    },
    item : {
        flex : 1,
        flexDirection : 'row',
        paddingBottom : 16
    },
    wrapperInfo : { 
        flex : 1 
    },
    itemName : {
        fontWeight : 'bold',
        fontSize : 18
    },
    wrapperItemPrice : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingRight : 16 
    },
    itemPrice : {
        textAlign : 'right',
        fontWeight : 'bold',
        color: '#35727A'
    }
})