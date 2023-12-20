import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import icon from "../../utils/icon";
import SettingProfile from "../../components/profile/SettingProfile";
import settingData from "../../constant/settingData";
import Header from "../../components/header";
const ProfileScreen = () => {
  const [selectedSetting, setSelectedSetting] = useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
      <Header
        iconLeft={icon.arrowLeft}
        title='Thông tin'
        iconRight={icon.shopping}
        onPressLeft={()=>navigation.goBack()}
      />

      <View style={styles.profileInformation}>
        <View style={styles.cricleProfile}>
          <Image
            source={icon.profile}
            style={styles.iconProfile}
            resizeMode="contain"
          />

        </View>
      
        <Text style={styles.nameUser}></Text>
        <Text style={styles.gmailUser}>bruno203@gmail.com</Text>
      </View>

      {settingData.map((item, index) => (
        <SettingProfile
          key={index}
          title={item.title}
          description={item.description}
          onPress={() => setSelectedSetting(index)}
          isSelected={selectedSetting === index}
        />
      ))}
      </View>

    </SafeAreaView>
  );


}

export default ProfileScreen;
