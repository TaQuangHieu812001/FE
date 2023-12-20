import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'

import { useState } from 'react';
import icon from '../../utils/icon';
import { useEffect } from 'react';
import RegisterApi from '../../api/Register.api';
import { ScreenName } from '../../navigation/ScreenName';
import styles from './style';


const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true)

  const handleRegister = async () => {
    try {
      if(!email.trim() || !email.trim()){
        Alert.alert('Tài khoản hoặc mật khẩu không được để trống');
        return;

      }
      
      const userData = { userName, email, password };
      const user = await RegisterApi(userData);
      
      Alert.alert(user.data.message)
      navigation.navigate(ScreenName.LOGIN_EMAIL_SCREEN)
      
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/img/background2.png')}
      />

      <View style={styles.lightsContainer}>
        <Image
          source={require('../../assets/img/light.png')}
          style={styles.lightImage}
        />
        <Image
          source={require('../../assets/img/light.png')}
          style={[styles.lightImage, { height: 160, width: 65, opacity: 0.75 }]}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          paddingTop: 40,
          paddingBottom: 10,
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Đăng ký</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Họ Tên"
              placeholderTextColor="gray"
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tài khoản"
              placeholderTextColor="gray"
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.parentPassImg}>
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor="gray"
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

      
            <TouchableOpacity onPress={() => handleRegister()} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Đăng ký</Text>
            </TouchableOpacity>
    

          <View style={styles.signUpContainer}>
            <Text>Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenName.LOGIN_EMAIL_SCREEN)}>
              <Text style={styles.signUpText}>Đăng nhập tại đây</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
  )
}

export default RegisterScreen;