import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    nameBanking: {
        fontSize: 18,
        color: 'black',
        fontWeight: "600"
    },
    nameUpFile: {
        color: 'black',
        fontWeight: "600",
        textAlign: 'center'
    },
    bankingDetails: {
        flexDirection: 'row',
         justifyContent: 'space-between',
          marginHorizontal: 14,
          marginTop:10,
         }
})

export default styles