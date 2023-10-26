import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";


const styles = StyleSheet.create({
    title:{
        color:'white',
        fontSize:32,
        lineHeight:38,
        fontWeight:'600',
        marginTop:windowDimensions.width * 0.32,
        marginLeft:'3%',
    },
    content:{
        fontSize:16,
        fontWeight:'400',
        color:'#909090',
        lineHeight:22,
        marginLeft:'3%',
        width:windowDimensions.width * 0.85,
        marginTop:12,
    },
    btnEmail:{
        height: '6%',
        width: '50%',
        backgroundColor: '#8DA75C',
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:'25%',
    },
    email:{
        fontSize:14,
        color:'black',
        fontWeight:'700',
        textAlign:'center',
     
    },
    contentContinue:{
        fontSize:12,
        color:'#909090',
        textAlign:'center',
        marginTop:'3%',
    },
    parentIcons:{
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:'10%'
    },
    icon:{
        width:windowDimensions.width * 0.1,
        marginLeft:'5%',

    },
    iconApple:{
        width:windowDimensions.width * 0.1,
    }
})

export default styles