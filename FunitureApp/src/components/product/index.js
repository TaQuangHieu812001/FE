import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import product from '../../constant/product'

const Product = () => {
  const [dataProduct, setDataProduct] = useState(product);
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
      <View style={styles.product}>
        <TouchableOpacity
          style={[
            styles.btnFavorite,
            {
              backgroundColor: favoriteProducts.includes(index)
                ? 'rgba(255, 0, 0, 0.1)'
                : 'rgba(0, 0, 0, 0.1)',
            },
          ]}
          onPress={() => checkSelectFavoriteProduct(index)}
        >
          <Image
            source={item.favorite}
            style={[
              styles.iconFavorite,
              {
                tintColor: favoriteProducts.includes(index) ? 'red' : '#000000',
              },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.imgProduct}
        />
        <Text style={styles.nameProduct}>{item.nameProduct}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={dataProduct}
      renderItem={ItemProduct}
      numColumns={2}
    />
  );
};

export default Product;
