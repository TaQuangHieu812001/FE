import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import styles from './style';
import { useState } from 'react';
import icon from '../../utils/icon';
import { useEffect } from 'react';
import RegisterApi from '../../api/Register.api';
import { ScreenName } from '../../navigation/ScreenName';


const RegisterScreen = ({navigation}) => {
    const [userName,setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seePassword, setSeePassword] = useState(true)

    const handleRegister = async ()=>{
        try{
            console.log('vao')
            const userData = {userName,email,password};
            const user =await RegisterApi(userData);        
            console.log("user: ",user.data.message);
          
           
        }catch(err){
            console.log(err)
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Create your account</Text>
            <TextInput
                placeholder="Name"
                style={styles.input}
                value={userName}
                onChangeText={(text) => setUserName(text)}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <View style={styles.parentPassImg}>
                <TextInput
                    style={styles.inputFl}
                    value={password}
                    placeholder=" Password"
                    secureTextEntry={seePassword}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
                    <Image
                        source={seePassword ? icon.eyeActive : icon.eyeClose}
                        style={styles.imgEye}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnCreateAccount} onPress={()=>handleRegister()}>
                <Text style={styles.titleFooter} >Create Account</Text>
            </TouchableOpacity>
        </View>

    )
}

export default RegisterScreen;