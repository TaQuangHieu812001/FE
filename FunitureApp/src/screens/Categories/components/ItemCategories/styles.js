import React from "react";
import { StyleSheet } from "react-native";
import { windowDimensions } from "../../../../utils/dimesion";

const styles = StyleSheet.create({
    btnCategory: {
        width:windowDimensions.width * 0.43,
        height:windowDimensions.height *0.155,
        borderRadius: 12,
        marginHorizontal: '2%',
        marginTop: '5.5%',
        justifyContent: 'center',
   
      },
      cricleIcon: {
        marginTop: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 45,
        backgroundColor: '#f5f5f5',
      },
      iconCategory: {
        justifyContent: 'center',
        alignSelf: 'center',
        width:windowDimensions.width *0.07,
        height:windowDimensions.width * 0.07,
        
      },
      titleCategory: {
        marginTop: '3%',
        alignSelf: 'center',
        fontSize: 12,
      },
})
export default styles;