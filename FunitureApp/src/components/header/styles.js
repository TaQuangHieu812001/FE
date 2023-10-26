import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: '6%',
      },
      titleHeader: {
        fontSize: 18,
        color: '#303030',
        fontWeight: '500',
      },
      iconArrow: {
        width: 18,
        height: 18,
        alignSelf:'center',
      },
      iconShopping: {
        width: 25,
        height: 25,
        alignSelf:'center',
        tintColor:'gray'
      },
      cricleIcon: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 45,
      },
})

export default styles;