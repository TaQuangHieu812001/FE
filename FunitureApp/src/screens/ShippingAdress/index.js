import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/header'
import icon from '../../utils/icon'
import { useState } from 'react'
import ApiShip from '../../api/Shipping.api'
import { useEffect } from 'react'
import { ScreenName } from '../../navigation/ScreenName'
export default function ShippingAddressScreen({ navigation }) {
    const [checkOrders, setCheckOrders] = useState(true)
    const [ship, setShip] = useState([]);
    useEffect(() => {
        getAllShip();
        const unsubscribe = navigation.addListener('focus', () => {
            getAllShip();
            console.log('focus')
        });
        return unsubscribe;
    }, [])
    const getAllShip = async () => {
        var response = await ApiShip.GetAll();
        if (response.isSuccess) {
            setShip(response.data);
        }
        else alert(response.msg);
    }
    const ToggleCheckOrder = async (item) => {
        if (item.active == 1) return;
        item.active = item.active == 0 ? 1 : 0;
        let response = await ApiShip.UpdateActive(item.id);
        if (response.isSuccess) {
            getAllShip();
        }
        else alert(response.msg)

    }
    const remove = async (id) => {
        let response = await ApiShip.Delete(id);
        if (response.isSuccess) {
            getAllShip();
        }
        else alert(response.msg)
    }
    const renderItem = ({ item, index }) => {
        return <View style={styles.addressDetails}>
            <View style={{ marginLeft: '3%' }}>
                <TouchableOpacity style={styles.btnShipping} onPress={() => ToggleCheckOrder(item)}>
                    <Image
                        source={item.active == 0 ? icon.rectangle : icon.rectangleTrue}
                        resizeMode='contain'
                        style={styles.iconRectangle}
                    />
                </TouchableOpacity>
                <Text style={styles.nameCustomer}>{item.name}</Text>
                <View style={styles.contact}>
                    <Image
                        source={icon.phone}
                        resizeMode='contain'
                        style={styles.iconPhone}
                    />
                    <Text style={styles.phoneNumber}>{item.phoneNumber} </Text>
                </View>
                <View style={styles.contact}>
                    <Image
                        source={icon.map}
                        resizeMode='contain'
                        style={styles.iconPhone}
                    />
                    <Text style={styles.phoneNumber}>{item.address}</Text>
                </View>

                <View style={styles.footerOrdersDetails}>
                    <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate(ScreenName.ShippingEdit, item)}>
                        <Text style={styles.contnentEdit}>Sửa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDelete} onPress={() => remove(item.id)}>
                        <Image
                            source={icon.recycle}
                            resizeMode='contain'
                            style={styles.iconRecycle}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Header
                    title='Giao hàng'
                    iconLeft={icon.arrowLeft}
                    iconRight={icon.increase}
                    onPressRight={() => navigation.navigate(ScreenName.ShippingEdit)}
                    onPressLeft={() => navigation.goBack()}
                />
                <Text style={styles.contentShipping}>Thông tin địa chỉ giao hàng</Text>

                <FlatList
                    data={ship}
                    renderItem={renderItem}
                />
            </View>

        </View>
    )
}