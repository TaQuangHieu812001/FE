import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './style';
import icon from '../../utils/icon';
import {ScreenName} from '../../navigation/ScreenName';

const CustomBottomTab = ({navigation}) => {
  return (
    <View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.HOME_SCREEN)}>
          <Image source={icon.home} resizeMode="contain" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.FAVORITE_SCREEN)}>
          <Image
            source={icon.favorite}
            resizeMode="contain"
            style={[styles.icon]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.CART_sCREEN)}>
          <Image
            source={icon.shopping}
            resizeMode="contain"
            style={[styles.icon]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.SETTING_SCREEN)}>
          <Image
            source={icon.setting}
            resizeMode="contain"
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBottomTab;
