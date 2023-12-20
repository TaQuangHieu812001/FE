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
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  const handleLogin = async () => {
    const user = {email, password};
    const response = await LoginApi(user);
   
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
          <Text style={styles.titleText}>Đăng nhập</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tài khoản"
              placeholderTextColor="gray"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.parentPassImg}>
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor="gray"
              secureTextEntry={seePassword}
              onChangeText={text => setPassWord(text)}
              value={password}
            />
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
              <Image
                source={seePassword ? icon.eyeActive : icon.eyeClose}
                style={styles.imgEye}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>


            <TouchableOpacity    
            style={styles.loginButton}
            onPress={() => handleLogin()}>
              <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </TouchableOpacity>
    

          <View style={styles.signUpContainer}>
            <Text>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenName.REGISTER_SCREEN)}>
              <Text style={styles.signUpText}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(ScreenName.REGISTER_SCREEN)}>
              <Text style={styles.signUpText}> Quên mật khẩu?</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginEmailScreen;
