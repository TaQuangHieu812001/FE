import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./styles";
import icon from "../../../utils/icon";
const SettingProfile = ({ title, description, onPress, isSelected }) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.btnSetting,
          { backgroundColor: isSelected ? "#303030" : "#ffff" },
        ]}
        onPress={onPress}
      >
        <View>
          <Text
            style={[
              styles.titleOrder,
              { color: isSelected ? '#ffff' : '#303030' }
            ]}
          >
            {title}
          </Text>
          <Text style={[styles.countOrder, { color: isSelected ? '#ffff' : '#303030' }]}>{description}</Text>
        </View>
        <Image
          source={icon.arrowRight}
          style={[
            styles.iconArrowright,
            { tintColor: isSelected ? '#ffff' : '#303030' }
          ]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
};

export default SettingProfile;
