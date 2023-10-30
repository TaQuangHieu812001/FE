import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { useState } from 'react';
import { ScreenName } from '../../../navigation/ScreenName'
const ItemCategory = ({ categories, navigation }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemPress = (id, name) => {
    navigation.navigate(ScreenName.ProductCateFilter_SCREEN, { id, name })
  };

  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity
        style={[
          styles.btnItem,
          {
            backgroundColor:
              item.id === selectedItemIndex ? '#303030' : '#f5f5f5',
          },
        ]}
        onPress={() => handleItemPress(item.id, item.name)}>
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          style={[
            styles.iconItem,
            {
              tintColor: item.id === selectedItemIndex ? '#FFFFFF' : '#909090',
            },
          ]}
        />
        <Text
          style={[
            styles.nameItem,
            {
              color: item.id === selectedItemIndex ? '#303030' : '#909090',
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ height: 95 }}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ItemCategory;
