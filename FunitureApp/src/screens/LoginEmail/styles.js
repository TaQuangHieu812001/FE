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
    input: {
        marginTop: '10%',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 5,
        borderColor: '#909090',
        height: 42,
        padding: 10,
        borderWidth: 1,
    },
    parentPassImg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        height:42,
        borderWidth: 1,
        borderColor: '#909090',
        alignItems: 'center',
        marginTop: "6%",
        borderRadius: 5,
    },

    imgEye: {
        width: 20,
        height: 20,
        paddingRight: '10%',
    },
    inputFl: {
        borderColor: "#909090",
        flexGrow: 1,
        borderRadius: 5,
        width:'80%',   
    },

    inputPass: {
        alignSelf: 'center',
        marginTop: '8%',
        width: '90%',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnForgot: {
        marginRight: '6%',
        marginTop: 6,
        alignSelf: 'flex-end',
        width: '30%',
        justifyContent: 'center',

    },
    titleForgot: {
        fontSize: 12,
        padding: 2,
        color: 'blue',
        textAlign: 'center',
    },
    titleLogin: {
        textAlign: 'center',
        color:'white',
        fontWeight:'800',
        fontSize:15,
    },
    btnLogin: {
        backgroundColor:'blue',
        marginTop: '8%',
        height: 45,
        justifyContent: 'center',
        width: '70%',
        borderRadius: 4,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20%',
    },
    titleSignUp:{
        color:'blue',
        fontWeight:'600',
    },
    

})

export default styles;