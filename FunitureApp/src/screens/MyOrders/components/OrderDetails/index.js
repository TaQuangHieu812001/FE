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
                        <Text style={styles.price}>{data.order.total}.000</Text>
                    </View>

                </View>
            </>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={styles.btnDetail} onPress={() => navigation.navigate(ScreenName.MyOrderDetail, { orderItems: data.orderItems })}>
                <Text style={styles.contentDetails}>Chi tiết</Text>
            </TouchableOpacity>
            {
                (data.order.bankingImage==null&&data.order.paymentType==0&&data.order.paymentStatus==0)&&
                    <TouchableOpacity style={styles.btnWarning} onPress={() => navigation.navigate(ScreenName.BANKINGONLINE, { order: data.order })}>
                    <Text style={styles.contentDetails}>Chưa thanh toán</Text>
                </TouchableOpacity>
            }
</View>
        </View>
    )
}
export default OrderDetails