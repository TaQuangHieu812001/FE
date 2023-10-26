import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import image from "../../utils/image";
import icon from "../../utils/icon";
import { ScreenName } from "../../navigation/ScreenName";
import styles from "./styles";

const LoginScreen = ({ navigation }) => {



    return (
        <ImageBackground source={image.background}
            style={{ flex: 1 }}
        >
            <Text style={styles.title}>MAKE YOUR {'\n'}HOME BEAUTIFUL</Text>
            <Text style={styles.content}>The best simple place where you discover most wonderful furnitures and make your home beautiful...!!!</Text>
            <TouchableOpacity style={styles.btnEmail} onPress={() => navigation.navigate(ScreenName.LOGIN_EMAIL_SCREEN)}>
                <Text style={styles.email}>Continue with Email</Text>
            </TouchableOpacity>
            <Text style={styles.contentContinue}>Or continue with</Text>

            <View style={styles.parentIcons}>
                <TouchableOpacity onPress={() => console.log('a')}>
                    <Image source={icon.google} resizeMode="contain" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('b')}>
                    <Image source={icon.faceBook} resizeMode="contain" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('c')}>
                    <Image source={icon.apple} resizeMode="contain" style={styles.iconApple} />
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}
export default LoginScreen