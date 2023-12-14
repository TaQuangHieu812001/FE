import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        position: 'relative',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    lightsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        width: '100%',
    },
    lightImage: {
        height: 225,
        width: 90,
    },
    titleContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        // marginTop:"30%",
    },
    formContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 24,
    },
    parentPassImg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 2,
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
      
    },
    inputContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 2,
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
    },
    input: {
        color: 'black',
        fontSize: 16,
    },
    imgEye: {
        width: 20,
        height: 20,
        paddingRight: '10%',
    },
    loginButton: {

        backgroundColor: '#00BFFF',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        color: '#00BFFF',
    },

})

export default styles;