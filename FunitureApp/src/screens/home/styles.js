import React from "react";
import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 10,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8%',
    },
    title: {
        fontSize: 28,
        color: 'black',
        fontWeight: '600',
        lineHeight: 28,
    },
    btnProfile: {
        justifyContent: 'center',
    },
    iconProfile: {
        alignSelf: 'center',
        width: 40,
        height: 40,
    },
    parentSearchFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '6%',

        marginLeft: '5%',
    },
    btnSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth:1,
        width: '80%',

    },

    iconFilter: {
        width: windowDimensions.width * 0.13,
        height: windowDimensions.height * 0.07,

    },
    iconSearch: {
        width: 24,
        height: 24,
    },
    listCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: 20,
        marginHorizontal:4,
    },
    titleCategory: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#303030',
    },
    titleViewAll: {
        color: '#909090',
        fontSize: 12,
        fontWeight: '500',
    },



})

export default styles