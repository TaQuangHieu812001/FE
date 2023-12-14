import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Header from '../../components/header'
import icon from '../../utils/icon'
import { useState } from 'react'
import ApiShip from '../../api/Shipping.api'
import ApiOrder from '../../api/Order.api'
import { useEffect } from 'react'
import { ScreenName } from '../../navigation/ScreenName'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const OrderSuccess = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>Thành công!!!!</Text>
                    <Image
                        style={{ width: 30, height: 30, marginLeft: 20 }}
                        source={icon.checkboxTrue}
                    />
                </View>
                <Image
                    style={{ width: 350, height: 300, }}
                    source={icon.orderSuccess}
                    resizeMode='contain'
                />
                <Text style={{ fontSize: 18 }}>{`Đơn hàng của bạn sẽ được giao sớm.
Cảm ơn bạn đã chọn ứng dụng của chúng tôi!!`}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(ScreenName.MYORDER_SCREEN)}>
                    <Text style={styles.btnText}>Theo dõi đơn hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
                    onPress={() => navigation.navigate(ScreenName.HOME_SCREEN)}
                >
                    <Image
                        source={icon.back}
                        style={{ width: 20, height: 20, }}
                        resizeMode='contain'
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000', marginLeft: 20 }}>Trở về trang chủ</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default OrderSuccess

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        paddingVertical: 10, paddingHorizontal: 50, backgroundColor: 'green', borderRadius: 10, marginHorizontal: 50, marginTop: 50
    },
    btnText: { color: '#fff', fontSize: 17, textAlign: 'center' }
})