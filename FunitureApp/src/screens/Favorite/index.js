import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import Header from '../../components/header';
import icon from '../../utils/icon';
import image from '../../utils/image';
import { useState } from 'react';

const FavoriteScreen =()=> {
    const [selectProduct,setSelectProduct] =useState(true)
    const [deleteFavoriteProduct,setDeleteFavoriteProduct] =useState(false)
    const selectProductToCart=()=>{
        setSelectProduct(!selectProduct)
    }
    const updateListProduct =()=>{
        setDeleteFavoriteProduct(true)
    }
  return (
    <View style ={styles.container}>
        <View style={styles.body}>
            <Header
                iconLeft={icon.arrowLeft}
                title='Favorites'
                
            />
          {
            !deleteFavoriteProduct &&(
                <View style={styles.productFavorite}>
                   <View style={styles.productDetail}>
                   <Image
                        source={image.stand}
                        resizeMode='contain'
                        style={styles.product}
                    />
                    <View style={styles.descProduct}>
                        <Text style={styles.nameProduct}>Minimal</Text>
                        <Text style={styles.price}>$25</Text>
                    </View>
                   </View>
                    <View style={styles.selectIcon}>
                            <TouchableOpacity onPress={updateListProduct}>
                                <Image
                                    source={icon.delete}
                                    resizeMode='contain'
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={selectProductToCart}>
                                <Image
                                    source={selectProduct?icon.addtoCart:icon.notAddtoCart}
                                    resizeMode='contain'
                                    style={styles.cartIcon}
                                />
                            </TouchableOpacity>
                    </View>
            </View>
            )
          }
        </View>
    </View>
  )
}
export default FavoriteScreen;