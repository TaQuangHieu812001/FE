import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import Header from '../../components/header';
import icon from '../../utils/icon';
import OrderDetails from './components/OrderDetails';

const MyOrderScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Header
          title='My orders'
          iconLeft={icon.arrowLeft}
          iconRight={icon.shopping}
        />
        <View style={styles.OrderStatus}>
          <TouchableOpacity>
            <Text style={styles.nameStatus}>Delivered</Text>
            <View style={styles.horizontalShort}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.nameStatus}>Proccesing</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.nameStatus}>Canceled</Text>
          </TouchableOpacity>
        </View>

        <OrderDetails/>
        

      </View>

    </View>
  )
}

export default MyOrderScreen;