import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/header'
import icon from '../../utils/icon'
import { useState } from 'react'

export default function ShippingAddressScreen() {
    const [checkOrders, setCheckOrders] = useState(true)

    const ToggleCheckOrder = () => {
        setCheckOrders(!checkOrders)
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Header
                    title='Shipping Address'
                    iconLeft={icon.arrowLeft}
                    iconRight={icon.shopping}
                />
                <Text style={styles.contentShipping}>Use as the shipping address</Text>
                <View style={styles.addressDetails}>
                    <View style={{ marginLeft: '3%' }}>
                        <TouchableOpacity style={styles.btnShipping} onPress={() => ToggleCheckOrder()}>
                            <Image
                                source={checkOrders ? icon.rectangle : icon.rectangleTrue}
                                resizeMode='contain'
                                style={styles.iconRectangle}
                            />
                        </TouchableOpacity>
                        <Text style={styles.nameCustomer}>Bruno Fernandes</Text>
                        <View style={styles.contact}>
                            <Image
                                source={icon.phone}
                                resizeMode='contain'
                                style={styles.iconPhone}
                            />
                            <Text style={styles.phoneNumber}>+123 456 789 </Text>
                        </View>
                        <View style={styles.contact}>
                            <Image
                                source={icon.map}
                                resizeMode='contain'
                                style={styles.iconPhone}
                            />
                            <Text style={styles.phoneNumber}>25 rue Robert Latouche, Nice, 06200, Côte D’azur, France</Text>
                        </View>

                        <View style={styles.footerOrdersDetails}>
                            <TouchableOpacity style={styles.btnEdit}>
                                <Text style={styles.contnentEdit}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnDelete}>
                                <Image
                                    source={icon.recycle}
                                    resizeMode='contain'
                                    style={styles.iconRecycle}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                
            </View>
            
        </View>
    )
}