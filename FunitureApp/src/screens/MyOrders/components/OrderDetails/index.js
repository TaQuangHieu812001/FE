import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import moment from 'moment'
import { ScreenName } from '../../../../navigation/ScreenName'
const OrderDetails = ({ data, navigation }) => {
    console.log(data)
    return (
        <View style={styles.orderDetail}>
            <>
                <View style={styles.orderCode}>
                    <Text style={styles.contentCode}>Đơn hàng #{data.order.id}</Text>
                    <Text style={styles.dmyOrder}>{moment(data.order.create_at).format("DD/MM/YYYY")}</Text>
                </View>
                <View style={styles.barLong}></View>

                <View style={styles.orderQuantity}>

                    <View style={styles.row}>
                        <Text style={styles.quantity}>Sản phẩm: </Text>
                        <Text style={styles.price}>{data.orderItems.length}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.total}>Tổng: </Text>
                        <Text style={styles.price}>{data.order.total}</Text>
                    </View>

                </View>
            </>
            <TouchableOpacity style={styles.btnDetail} onPress={() => navigation.navigate(ScreenName.MyOrderDetail, { orderItems: data.orderItems })}>
                <Text style={styles.contentDetails}>Details</Text>
            </TouchableOpacity>

        </View>
    )
}
export default OrderDetails