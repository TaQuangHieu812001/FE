import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView, Linking } from 'react-native'
import React from 'react'

import Header from '../../components/header'
import icon from '../../utils/icon'
import { useState } from 'react'
import ApiShip from '../../api/Shipping.api'
import ApiOrder from '../../api/Order.api'
import { useEffect } from 'react'
import { ScreenName } from '../../navigation/ScreenName'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AddToCart, RemoveFromCart, ClearCart, UpdateCart } from '../../redux/Cart/action';
const Checkout = ({ navigation }) => {
    const dispatch = useDispatch();
    const [shipping, setShip] = useState({});
    //0:atm; 1: cash
    const [paymentType, setPaymentType] = useState(null);
    const [deliverFee, setDeliverFee] = useState(50);
    let CartState = useSelector(state => state.CartReducer);
    const [total, setTotal] = useState(0);

    const getAllShip = async () => {
        let response = await ApiShip.GetAll();
        if (response.isSuccess) {
            if (response.data.length == 0) {
                navigation.navigate(ScreenName.ShippingEdit);
                return;
            }
            setShip(response.data.filter(e => e.active == 1)[0]);
        }
        else alert(response.msg);
    }

    useEffect(() => {
        setTotal(getPriceOrder() + deliverFee)
        getAllShip();
        const unsubscribe = navigation.addListener('focus', () => {
            getAllShip();
            console.log('focus')
        });
        return unsubscribe;
    }, []);
    const getPriceOrder = () => {
        let sum = 0;
        CartState.filter(e => e.selected).map(e => {
            sum += e.count * e.productAttribute.price
        })
        return sum;
    }
    const postOrder = async () => {
        if (paymentType == null) {
            alert("Phương thức thanh toán chưa chọn");
            return;

        }
        let response = await ApiOrder.Add(shipping.id, paymentType, deliverFee, total, CartState.filter(e => e.selected));
        if (response.isSuccess) {
            dispatch(ClearCart());
            if (response.data != null) {
                console.log(response.data)
                Linking.openURL(response.data);
                navigation.navigate(ScreenName.MYORDER_SCREEN); return;
            }
            navigation.navigate(ScreenName.CheckoutSuccess)
        }
        else alert(response.msg);
    }
    const navigateBankingOnline =()=>{
        setPaymentType(0);
        navigation.navigate(ScreenName.BANKINGONLINE)
    }
    return (
        <View style={styles.body}>
            <Header
                title='Kiểm tra'
                iconLeft={icon.arrowLeft}
                onPressLeft={() => navigation.goBack()}
                onPressRight={()=>console.log('b')}
            />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ height: 20 }}></View>
                    <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate(ScreenName.SHIPPINGADDRESS_SCREEN)}>
                        <Text style={{ fontSize: 20 }}>
                           Vận chuyển
                        </Text>
                        <Image
                            source={icon.edit}
                            style={styles.pen}
                        />
                    </TouchableOpacity>
                    <Text style={styles.txtShipName}>{shipping.name} - {shipping.phoneNumber}</Text>
                    <Text style={styles.txtAddress}>
                        {shipping.address}
                    </Text>
                    <TouchableOpacity style={styles.btnEdit}>
                        <Text style={{ fontSize: 20 }}>
                            Thanh toán
                        </Text>
                        <Image
                            source={icon.edit}
                            style={styles.pen}
                        />
                    </TouchableOpacity>
                    <View style={{ paddingVertical: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigateBankingOnline()}
                            style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={paymentType == 0 ? icon.checkboxTrue : icon.checkboxFail}
                                style={{ width: 30, height: 30, marginHorizontal: 10 }}
                            />
                            <Image
                                source={icon.atm}
                                style={{ width: 30, height: 30, marginRight: 10 }}
                                resizeMode='contain'
                            />
                            <Text style={{ color: '#000' }}>Thẻ ngân hàng</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPaymentType(1)}
                            style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={paymentType == 1 ? icon.checkboxTrue : icon.checkboxFail}
                                style={{ width: 30, height: 30, marginHorizontal: 10 }}
                            />
                            <Image
                                source={icon.cash}
                                style={{ width: 30, height: 30, marginRight: 10 }}
                                resizeMode='contain'
                            />
                            <Text style={{ color: '#000' }}>Thanh toán trực tiếp</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#fff', borderRadius: 5, elevation: 20, padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20 }}>Đơn hàng</Text>
                            <Text style={{ color: '#000', fontSize: 20 }}>{getPriceOrder()}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ fontSize: 20 }}>Vận chuyển</Text>
                            <Text style={{ color: '#000', fontSize: 20 }}>{deliverFee}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ fontSize: 20 }}>Tổng cộng</Text>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{total}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => postOrder()}>
                        <Text style={styles.btnText}>Tạo đơn hàng</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >

    )
}

export default Checkout

const styles = StyleSheet.create({
    body: {
        flex: 1, backgroundColor: '#fff',

    },
    btnEdit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pen: {
        width: 20,
        height: 20
    },
    txtShipName: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 10,
        color: '#000'
    },
    txtAddress: {
        marginTop: 10,
        marginBottom: 20
    },
    btn: {
        paddingVertical: 10, paddingHorizontal: 50, backgroundColor: '#303030', borderRadius: 10, marginHorizontal: 50, marginTop: 50
    },
    btnText: { color: '#fff', fontSize: 17, textAlign: 'center' }
})