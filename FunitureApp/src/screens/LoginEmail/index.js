import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import icon from '../../utils/icon';
import { ScreenName } from '../../navigation/ScreenName';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginRequest } from '../../redux/Login/action';
import LoginApi from '../../api/Login.api';


const LoginEmailScreen = () => {

    const [email,setEmail] = useState('')
    const [password,setPassWord] = useState('') 
    const [seePassword, setSeePassword] = useState(true)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isLoading = useSelector((state)=>state.isLoading);

    const handleLogin = async ()=>{
        const user = {email,password}
        const response = await LoginApi(user)
        console.log("respone: ",response)
        dispatch(LoginRequest({
            email,
            password,
        }))
       if(response.data.success){
            Alert.alert(response.data.message)
            navigation.navigate(ScreenName.BOTTOM_TAB_NAVIGATOR,{screen:ScreenName.HOME_SCREEN})
       }else{
        Alert.alert(response.data.message)
       }
    
    }
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Login with account</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                onChangeText={text=>setEmail(text)}
            />
            <View style={styles.parentPassImg}>
                <TextInput
                    style={styles.inputFl}
                    placeholder=" Password"
                    secureTextEntry={seePassword}
                onChangeText={text => setPassWord(text)}
                />
                <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
                    <Image
                        source={seePassword ? icon.eyeActive : icon.eyeClose}
                        style={styles.imgEye}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnForgot}>
                <Text style={styles.titleForgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}
                onPress={()=>handleLogin()}
           >

                <Text style={styles.titleLogin}>Login</Text></TouchableOpacity>
            <View style={styles.row}>
                <Text style={{ marginBottom: 1 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate(ScreenName.REGISTER_SCREEN)}><Text style={styles.titleSignUp}>Sign up</Text></TouchableOpacity>
            </View>

        </View>

    );
};
export default LoginEmailScreen;
