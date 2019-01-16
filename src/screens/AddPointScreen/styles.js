import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrapper : {
        flex : 1
    },
    header :{
        top : 26,
        left : 16,
        zIndex : 100
    },
    backButton : {
        position : 'absolute',
        top : 26,
        left : 16
    },
    tripName : {
        position : 'absolute',
        left : 16,
        bottom : 40
    },
    tripPrice : {
        position : 'absolute',
        bottom : 40,
        right : 16,
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
    },
    input : {
        backgroundColor : '#E5E5E5',
        padding : 20,
        marginBottom : 16
    },
    btn : {
        backgroundColor : '#E5E5E5',
        padding : 20,
        marginBottom : 16
    }
})