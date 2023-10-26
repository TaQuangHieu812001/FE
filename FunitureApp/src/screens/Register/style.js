import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '30%',
    },
    parentPassImg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        height: 42,
        borderWidth: 1,
        borderColor: '#909090',
        alignItems: 'center',
        marginTop: "6%",
        borderRadius: 5,
    },
    input: {
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 5,
        borderColor: '#909090',
        height: 42,
        padding: 10,
        borderWidth: 1,
    },
    inputFl: {
        borderColor: "#909090",
        flexGrow: 1,
        borderRadius: 5,
        width: '80%',
    },

    imgEye: {
        width: 20,
        height: 20,
        paddingRight: '10%',
    },
    btnCreateAccount:{
        borderWidth:1,
        backgroundColor:'blue',
        marginTop: '8%',
        height: 45,
        justifyContent: 'center',
        width: '70%',
        borderRadius: 4,
        alignSelf: 'center'
    },
    titleFooter:{
        textAlign: 'center',
        color:'white',
        fontWeight:'800',
        fontSize:15,
    },


})

export default styles;