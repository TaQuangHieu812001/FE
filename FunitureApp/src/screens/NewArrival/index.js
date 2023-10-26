import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import icon from '../../utils/icon';
import styles from './styles';
import image from '../../utils/image';
import Product from '../../components/product';

const NewArrivalScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{marginHorizontal:10,}}>
          <Header
            title="New Arrival"
            iconLeft={icon.arrowLeft}
            iconRight={icon.shopping}
          />
        </View>
        <Product />

      </View>
    </View>
  );
};
export default NewArrivalScreen;
