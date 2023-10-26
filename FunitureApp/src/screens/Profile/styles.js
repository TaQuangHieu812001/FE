import {StyleSheet,Platform} from 'react-native';
import { windowDimensions } from '../../utils/dimesion';


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff',
  },
    body:{
      flex:1,
      marginHorizontal:'5%',
    },
   iconArrow: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
   titleHeader: {
    fontSize: 16,
    color: '#303030',
    fontWeight: '500',
  },
   iconShopping: {
    width: 25,
    height: 25,
    marginTop: 3,
  },
  iconProfile:{
   alignSelf:'center',
   position:'absolute',
  },
  profileInformation:{
    marginTop:"6%",
  },
  cricleProfile:{
    width:90,
    height:90,
    borderWidth:3,
    borderColor:'#4E5A37',
    borderRadius:999,
    alignSelf:'center',
    borderStyle: 'dashed',
    justifyContent:'center'
  },
  criclePen:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#4E5A37',
    justifyContent:'center',
    alignSelf:'center',
    position:'absolute',
    top:"45%",
   
  },
  iconPen:{
    width:'40%',
    alignSelf:'center',
  },
  nameUser:{
    marginTop:12    ,
    textAlign:'center',
    fontSize:20,
    color:'#303030',
    fontWeight:'600',
    lineHeight:20,
  },
  gmailUser:{
    fontSize:14,
    textAlign:'center',
    color:'#909090',
    marginTop:4,
  },
  titleOrder:{
    marginLeft:16,
    color:'black',
    fontSize:18,
    fontWeight:'600',
  },
  countOrder:{
    fontSize:12,
    marginTop:6,
    color:'#909090',
    marginLeft:16,
  },
  btnArrowright:{
    justifyContent:'center',
    marginRight:"8%",
  },
  iconArrowright:{
    width:15,
    height:15,
    tintColor:'black',
    alignSelf:'center',
    marginRight:12,
  },
  btnSetting:{
    width:windowDimensions.width * 0.89,
    height:windowDimensions.height *  0.1,
    alignSelf:'center',
    alignItems:'center',
    borderRadius:8,
    marginTop:12,
    // borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',

  }
})
export default styles