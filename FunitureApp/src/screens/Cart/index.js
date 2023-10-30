import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/header';
import icon from '../../utils/icon';
import styles from './styles';
import image from '../../utils/image';
import { useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AddToCart, RemoveFromCart, ClearCart, UpdateCart } from '../../redux/Cart/action';
import { ScreenName } from '../../navigation/ScreenName';
const MyCartScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  let CartState = useSelector(state => state.CartReducer);
  const checkProduct = (item, index) => {
    if (item.selected) {
      item.selected = false;
      dispatch(UpdateCart(index, item))
    } else {
      item.selected = true;
      dispatch(UpdateCart(index, item))
    }
  };

  const formatCount = (value) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const updateCount = (item, op, idx) => {
    if (item.count + op < 1) return;
    if (item.count + op > item.product.quantity) return;
    item.count += op;
    dispatch(UpdateCart(item, idx))
  };
  const renderItem = ({ item, index }) => {
    return <View style={styles.productMain}>
      <TouchableOpacity style={styles.btnCheckbox} onPress={() => checkProduct(item, index)}>
        <Image
          source={item.selected ? icon.checkboxTrue : icon.checkboxFail}
          resizeMode='contain'
          style={styles.checkbox}
        />
      </TouchableOpacity>

      <View style={styles.viewProduct}>
        <Image
          source={{ uri: item.product.image }}
          resizeMode='contain'
          style={styles.product}
        />
        <View style={styles.detailProduct}>
          <View>
            <Text style={styles.nameProduct}>{item.product.nameProduct}</Text>
            <Text style={styles.price}>{item.productAttribute.price}</Text>
          </View>
          <View style={styles.buyProduct}>
            <TouchableOpacity onPress={() => updateCount(item, -1, index)}>
              <Image
                source={icon.decrease}
                resizeMode='contain'
                style={styles.buyCount}
              />
            </TouchableOpacity>
            <Text style={styles.count}>{formatCount(item.count)}</Text>
            <TouchableOpacity onPress={() => updateCount(item, 1, index)}>
              <Image
                source={icon.increase}
                resizeMode='contain'
                style={styles.buyCount}

              />
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </View>
  }
  const getPrice = () => {
    let sum = 0;
    CartState.filter(e => e.selected).map(e => {
      sum += e.count * e.productAttribute.price
    })
    return sum;
  }
  return (
    <View style={styles.container}>
      <Header
        iconLeft={icon.arrowLeft}
        title='My Cart'
        onPressLeft={() => navigation.dispatch(CommonActions.goBack())}
        onPressRight={() => navigation.navigate(ScreenName.CART_sCREEN)}
      />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <View style={styles.productMain}>
          <TouchableOpacity style={styles.btnCheckbox} onPress={() => checkProduct()}>
            <Image
              source={selectProduct ? icon.checkboxTrue : icon.checkboxFail}
              resizeMode='contain'
              style={styles.checkbox}
            />
          </TouchableOpacity>

          <View style={styles.viewProduct}>
            <Image
              source={image.stand}
              resizeMode='contain'
              style={styles.product}
            />
            <View style={styles.detailProduct}>
              <View>
                <Text style={styles.nameProduct}>Minimal Stand</Text>
                <Text style={styles.price}>$25.00</Text>
              </View>
              <View style={styles.buyProduct}>
                <TouchableOpacity onPress={() => updateCount(count - 1, setCount)}>
                  <Image
                    source={icon.decrease}
                    resizeMode='contain'
                    style={styles.buyCount}
                  />
                </TouchableOpacity>
                <Text style={styles.count}>{formatCount(count)}</Text>
                <TouchableOpacity onPress={() => updateCount(count + 1, setCount)}>
                  <Image
                    source={icon.increase}
                    resizeMode='contain'
                    style={styles.buyCount}

                  />
                </TouchableOpacity>

              </View>

            </View>
          </View>
        </View> */}
        <FlatList
          data={CartState}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.detailFooter}>
          <Text style={styles.itemProduct}>SelectItems ({CartState.filter(e => e.selected).length})</Text>
          <View style={styles.total}>
            <Text style={styles.titleTotal}>Total</Text>
            <Text style={styles.priceTotal}>{getPrice()}</Text>
          </View>
        </View>
        <TouchableOpacity disabled={CartState.filter(e => e.selected).length <= 0} style={styles.btnCheckOut} onPress={() => navigation.navigate(ScreenName.Checkout)}>
          <Text style={styles.contentCheckOut}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCartScreen;