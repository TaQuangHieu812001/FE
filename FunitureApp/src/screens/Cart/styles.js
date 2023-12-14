import React from "react";
import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productMain: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,

        justifyContent: 'space-between',

    },
    checkbox: {
        width: 28,
        height: 28,
        marginTop: 12,
    },

    btnCheckbox: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginLeft: 10,
    },
    product: {
        height: 120,
        width: windowDimensions.width * 0.38,

    },
    buyProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 4,
        marginTop: 10,
    },
    viewProduct: {
        flexDirection: 'row',
        marginTop: '10%',


    },
    detailProduct: {
        justifyContent: 'space-between',
        width: windowDimensions.width * 0.3,

    },
    buyCount: {
        width: 22,
        height: 22,
    },
    descProduct: {
        flexDirection: 'row',
    },
    nameProduct: {
        fontWeight: '500',
        color: '#303030',
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#303030',
        textAlign: 'center',
    },
    price: {
        fontWeight: '600',
        color: '#4E5A37',

    },
    footer: {

        width: '100%',
        height: windowDimensions.height * 0.18,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    detailFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '6%',
    },
    itemProduct: {
        fontSize: 16,
        fontWeight: "500",
        color: '#303030',
    },
    titleTotal: {
        fontSize: 12,
        textAlign: 'center',
        color: '#303030',
    },
    total: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceTotal: {
        fontSize: 20,
        fontWeight: '600',
        color: '#4E5A37',
        textAlign: 'center',
        marginLeft: 16,
    },
    btnCheckOut: {
        marginTop: '5%',
        width: windowDimensions.width * 0.45,
        height: windowDimensions.height * 0.06,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#303030'
    },
    contentCheckOut: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600',
    }

})

export default styles