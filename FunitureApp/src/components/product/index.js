import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import product from '../../constant/product'
import icon from "../../utils/icon";
import { ScreenName } from '../../navigation/ScreenName';

const Product = ({ products, navigation }) => {

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const checkSelectFavoriteProduct = (index) => {
    if (favoriteProducts.includes(index)) {
      console.log(favoriteProducts);
      const updatedFavorites = favoriteProducts.filter((item) => item !== index);
      setFavoriteProducts(updatedFavorites);
    } else {
      setFavoriteProducts([...favoriteProducts, index]);
    }
  };
  const ItemProduct = ({ item, index }) => {
    return (
      <View style={{ width: '50%', padding: 10 }}>
        <TouchableOpacity style={styles.product}
          onPress={() => navigation.navigate(ScreenName.ProductDetail, { id: item.product.id })}
        >
          <TouchableOpacity
            style={[
              styles.btnFavorite,
              {
                backgroundColor: favoriteProducts.includes(item.product.id)
                  ? 'rgba(255, 0, 0, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
              },
            ]}
            onPress={() => checkSelectFavoriteProduct(item.product.id)}
          >
            <Image
              source={icon.favorite}
              style={[
                styles.iconFavorite,
                {
                  tintColor: favoriteProducts.includes(item.product.id) ? 'red' : '#000000',
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={{ uri: item.product.image }}
            resizeMode="contain"
            style={styles.imgProduct}
          />
          <Text style={styles.nameProduct}>{item.product.nameProduct}</Text>
          <Text style={styles.price}>{item.productAttribute[0]?.price}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={ItemProduct}
      numColumns={2}
    />
  );
};

export default Product;
