import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const OrderDetails = () => {
    return (
        <View style={styles.orderDetail}>
            <>
                <View style={styles.orderCode}>
                    <Text style={styles.contentCode}>Order No238562312</Text>
                    <Text style={styles.dmyOrder}>20/03/2020</Text>
                </View>
                <View style={styles.barLong}></View>

                <View style={styles.orderQuantity}>

                    <View style={styles.row}>
                        <Text style={styles.quantity}>Quantity: </Text>
                        <Text style={styles.price}>03</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.total}>Total Amount: </Text>
                        <Text style={styles.price}>$150</Text>
                    </View>

                </View>
            </>
            <TouchableOpacity style={styles.btnDetail}>
                <Text style={styles.contentDetails}>Details</Text>
            </TouchableOpacity>

        </View>
    )
}
export default OrderDetails