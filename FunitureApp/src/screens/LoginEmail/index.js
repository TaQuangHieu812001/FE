import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import icon from '../../utils/icon';
import {ScreenName} from '../../navigation/ScreenName';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LoginRequest, LoginSuccess} from '../../redux/Login/action';
import LoginApi from '../../api/Login.api';
import image from '../../utils/image';

const LoginEmailScreen = () => {
  const [email, setEmail] = useState('t12k1@gmail.com');
  const [password, setPassWord] = useState('123456');
  const [seePassword, setSeePassword] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  const handleLogin = async () => {
    const user = {email, password};
    const response = await LoginApi(user);
    console.log('respone: ', response);
    // dispatch(LoginRequest({
    //     email,
    //     password,
    // }))
    if (response.isSuccess) {
      dispatch(LoginSuccess(response.data));

      navigation.navigate(ScreenName.BOTTOM_TAB_NAVIGATOR, {
        screen: ScreenName.HOME_SCREEN,
      });
    } else {
      Alert.alert(response.msg);
    }
  };
  return (
    // <View style={styles.body}>
    //     <Image
    //         source={require('../../assets/img/background2.png')}
    //         style={{flex:1,width:'100%',height:'100%',borderWidth:1}}
    //     />
    //     <Text style={styles.title}>Login with account</Text>
    //     <TextInput
    //         placeholder="Email"
    //         style={styles.input}
    //         onChangeText={text => setEmail(text)}
    //     />
    //     <View style={styles.parentPassImg}>
    //         <TextInput
    //             style={styles.inputFl}
    //             placeholder=" Password"
    //             secureTextEntry={seePassword}
    //             onChangeText={text => setPassWord(text)}
    //         />
    //         <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
    //             <Image
    //                 source={seePassword ? icon.eyeActive : icon.eyeClose}
    //                 style={styles.imgEye}
    //                 resizeMode="contain"
    //             />
    //         </TouchableOpacity>
    //     </View>
    //     <TouchableOpacity style={styles.btnForgot}>
    //         <Text style={styles.titleForgot}>Forgot Password?</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.btnLogin}
    //         onPress={() => handleLogin()}
    //     >

    //         <Text style={styles.titleLogin}>Login</Text></TouchableOpacity>
    //     <View style={styles.row}>
    //         <Text style={{ marginBottom: 1 }}>Don't have an account?</Text>
    //         <TouchableOpacity onPress={() => navigation.navigate(ScreenName.REGISTER_SCREEN)}><Text style={styles.titleSignUp}>Sign up</Text></TouchableOpacity>
    //     </View>

    // </View>
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
          style={[styles.lightImage, {height: 160, width: 65, opacity: 0.75}]}
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
          <Text style={styles.titleText}>Login</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="gray"
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.parentPassImg}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
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

          <View style={styles.loginButton}>
            <TouchableOpacity    onPress={() => handleLogin()}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenName.REGISTER_SCREEN)}>
              <Text style={styles.signUpText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginEmailScreen;
