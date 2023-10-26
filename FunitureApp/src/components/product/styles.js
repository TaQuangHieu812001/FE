import React from "react";
import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";

const styles = StyleSheet.create({
    product: {
        backgroundColor: '#f3f3f3',
        width: windowDimensions.width * 0.43,
        height:windowDimensions.height * 0.23,
        padding: 4,
        borderRadius: 12,
        marginTop: '5%',
        marginLeft:12,
    
    },
    imgProduct: {
        width:'80%',
        height: windowDimensions.height * 0.12,
        alignSelf:'center',
    },
    btnFavorite: {
        backgroundColor: 'black',
        width: 22,
        height: 22,
        borderRadius: 999,
        marginRight: 10,
        alignSelf: 'flex-end',
        marginTop: 10,
        justifyContent: 'center',
    },
    iconFavorite: {
        width: 12,
        height: 12,
        alignSelf: 'center',
    },
    nameProduct: {
        color: '#303030',
        fontWeight: '600',
        fontSize: 12,
        marginLeft: 12,
    },
    price: {
        fontSize: 12,
        marginLeft: 12,
        color: '#4E5A37',
        fontWeight: '700'
    },
})

export default styles