import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/header';
import icon from '../../utils/icon';
import { windowDimensions } from "../../utils/dimesion";
import image from '../../utils/image';
import { useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AddToCart, RemoveFromCart, ClearCart, UpdateCart } from '../../redux/Cart/action';
import { ScreenName } from '../../navigation/ScreenName';
const MyCartScreen = ({ navigation, route }) => {
    let CartState = route.params.orderItems;
    const formatCount = (value) => {
        return value < 10 ? `0${value}` : value.toString();
    };

    const renderItem = ({ item, index }) => {
        return <View style={styles.productMain}>
            <View style={styles.viewProduct}>
                <Image
                    source={{ uri: item.product.image }}
                    resizeMode='contain'
                    style={styles.product}
                />
                <View style={styles.detailProduct}>
                    <View>
                        <Text style={styles.nameProduct}>{item.product.nameProduct}</Text>
                        <Text style={styles.price}>Giá tiền: ${item.productAttribute.price}</Text>
                    </View>
                    <View style={styles.buyProduct}>

                        <Text style={styles.count}>Số lượng: {formatCount(item.orderItem.quantity)}</Text>


                    </View>

                </View>
            </View>
        </View>
    }
    const getPrice = () => {
        let sum = 0;
        CartState.map(e => {
            sum += e.orderItem.quantity * e.productAttribute.price
        })
        return sum;
    }
    return (
        <View style={styles.container}>
            <Header
                iconLeft={icon.arrowLeft}
                title='Chi tiết'
                onPressLeft={() => navigation.dispatch(CommonActions.goBack())}
            />
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <FlatList
                    data={CartState}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.detailFooter}>
                    <Text style={styles.itemProduct}>Sản phẩm ({CartState.length})</Text>
                    <View style={styles.total}>
                        <Text style={styles.titleTotal}>Tổng</Text>
                        <Text style={styles.priceTotal}>{getPrice()}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default MyCartScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productMain: {
        flexDirection: 'row',
        alignItems: 'center',
        // flex:1,
        // borderWidth:1,
    },
    checkbox: {
        width: 28,
        height: 28,
        alignSelf: 'center',
    },

    btnCheckbox: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginLeft: 10,
    },
    product: {
        height: 101,
        width: windowDimensions.width * 0.38,
    },
    buyProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    viewProduct: {
        flexDirection: 'row',
        marginTop: '10%',

    },
    detailProduct: {
        marginTop: 4,
        justifyContent: 'space-between',
        width: windowDimensions.width * 0.3,
        marginLeft:14,
        right: 6,
    },
    buyCount: {
        width: 28,
        height: 28,
    },
    descProduct: {
        flexDirection: 'row',
    },
    nameProduct: {
        fontWeight: '500',
        color: '#303030',
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#303030',
        textAlign: 'center',
    },
    price: {
        fontWeight: '600',
        color: '#4E5A37',

    },
    footer: {

        width: '100%',
        height: windowDimensions.height * 0.18,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 20,
        backgroundColor: '#fff'
    },
    detailFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '6%',
    },
    itemProduct: {
        fontSize: 16,
        fontWeight: "500",
        color: '#303030',
    },
    titleTotal: {
        fontSize: 12,
        textAlign: 'center',
        color: '#303030',
    },
    total: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceTotal: {
        fontSize: 20,
        fontWeight: '600',
        color: '#4E5A37',
        textAlign: 'center',
        marginLeft: 16,
    },
    btnCheckOut: {
        marginTop: '5%',
        width: windowDimensions.width * 0.45,
        height: windowDimensions.height * 0.06,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#303030'
    },
    contentCheckOut: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600',
    }

})