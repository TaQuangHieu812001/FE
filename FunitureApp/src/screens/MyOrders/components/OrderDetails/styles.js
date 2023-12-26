import { StyleSheet } from "react-native";
import { windowDimensions } from "../../../../utils/dimesion";


const styles = StyleSheet.create({
    orderDetail:{
        width:windowDimensions.width * 0.87,
        marginTop:'6%',
        padding:10,
        borderRadius:8,
        backgroundColor: 'white',
        shadowColor: '#8A959E',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignSelf:'center',
    },
 
    orderCode:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    orderQuantity:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12,
    },
    quantity:{
        color:'#909090',
        fontWeight:'400',
    },
    price:{
        fontSize:16,
        fontWeight:'600',
        color:'#303030',
        textAlign:'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    barLong:{
        width:295,
        height:1,
        backgroundColor:'#E0E0E0',
        pading:10,
        alignSelf:'center',
        marginTop:'5%'
    },
    contentCode:{
        fontSize:16,
        fontWeight:'400',
        color:'#242424',
    },
    dmyOrder:{
        color:'#909090',
        fontWeight:'400',
    },
    btnDetail:{
        width:windowDimensions.width * 0.21,
        height:windowDimensions.height * 0.04,
        borderRadius:8,
        backgroundColor:'#303030',
        justifyContent:'center',
        marginTop:'10%',
    },
    btnWarning:{
        width:windowDimensions.width * 0.41,
        height:windowDimensions.height * 0.04,
        borderRadius:8,
        backgroundColor:'orange',
        justifyContent:'center',
        marginTop:'10%',
    },
    contentDetails:{
        fontSize:14,
        color:'#ffff',
        textAlign:'center',
        alignSelf:'center',
      
    }
})

export default styles;