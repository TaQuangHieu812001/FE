import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";


const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#ffff',
        },
        body:{
            flex:1,
            marginHorizontal:10,
        },
        productFavorite:{
            marginTop:'10%',
            flexDirection:'row',
            justifyContent:'space-between',
        },

        product:{
            height:101,
            width:windowDimensions.width *0.38,
        },
        productDetail:{
            flexDirection:'row',
            alignItems:'center',
        },
        descProduct:{
   
        },
        nameProduct:{
            fontWeight:'500',
            color:'#303030',
        },
        price:{
            fontWeight:'600',
            color:'#4E5A37',
            marginTop:10,
        },
        selectIcon:{
          
            justifyContent:'space-between',
            alignItems:'center',
        },
        icon:{
            width:24,
            height:24,
        },
        cartIcon:{
            width:36,
            height:36,
        },


})
export default styles