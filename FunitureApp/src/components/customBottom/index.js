import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
import icon from '../../utils/icon';
import { ScreenName } from '../../navigation/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const CustomBottomTab = ({ navigation }) => {
  return (
    <View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate(ScreenName.HOME_SCREEN)}>
          <Image source={icon.home} resizeMode="contain" style={styles.icon} />
          <Text>Trang Chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate(ScreenName.MYORDER_SCREEN)}>
          <Icon
            name='clipboard-text-outline'
            color='#000'

            size={25}
            style={[styles.icon]}
          />
          <Text>Đơn hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate(ScreenName.CART_sCREEN)}>
          <Image
            source={icon.shopping}
            resizeMode="contain"
            style={[styles.icon]}
          />
          <Text>Giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate(ScreenName.SETTING_SCREEN)}>
          <Image
            source={icon.setting}
            resizeMode="contain"
            style={[styles.icon]}
          />
          <Text>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBottomTab;
