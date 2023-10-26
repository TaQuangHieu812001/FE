import {StyleSheet} from 'react-native';
import { windowDimensions } from '../../../utils/dimesion';



const styles = StyleSheet.create({
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
    width:windowDimensions.width * 0.89,
    height:windowDimensions.height *  0.1,
    alignSelf:'center',
    alignItems:'center',
    borderRadius:8,
    marginTop:12,
    borderWidth:1,
    borderColor:'#f6f6f6',
    flexDirection:'row',
    justifyContent:'space-between',

  }
})
export default styles