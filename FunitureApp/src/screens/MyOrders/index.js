import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import Header from '../../components/header';
import icon from '../../utils/icon';
import OrderDetails from './components/OrderDetails';
import OrderApi from '../../api/Order.api';
import { ScreenName } from '../../navigation/ScreenName';

const MyOrderScreen = ({ navigation }) => {

  const [selectedTab, setSelectedTab] = useState("processing");
  const [orders, setOrders] = useState([]);
  const getAllOrder = async () => {
    console.log('getOrder')
    let response = await OrderApi.GetAll(selectedTab);
    if (response.isSuccess) {
      setOrders(response.data);
    }
    else alert(response.msg);
  }
  useEffect(() => {
    getAllOrder();
  }, [selectedTab])

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Header
          title='Đơn hàng'
          iconLeft={icon.arrowLeft}
          iconRight={icon.shopping}
          onPressLeft={() => navigation.goBack()}
          onPressRight={()=>navigation.navigate(ScreenName.CART_sCREEN)}
        />
        <View style={styles.OrderStatus}>
          <TouchableOpacity onPress={() => setSelectedTab("delivered")}>
            <Text style={styles.nameStatus}>Thành công</Text>
            {
              selectedTab == "delivered" && <View style={styles.horizontalShort}></View>
            }

          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("processing")}>
            <Text style={styles.nameStatus}>Đang xử lý</Text>
            {
              selectedTab == "processing" && <View style={styles.horizontalShort}></View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("canceled")}>
            <Text style={styles.nameStatus}>Hủy Đơn</Text>
            {
              selectedTab == "canceled" && <View style={styles.horizontalShort}></View>
            }
          </TouchableOpacity>
        </View>
        {
          orders.length > 0 &&
          <FlatList
            data={orders}
            renderItem={({ item, index }) => <OrderDetails data={item} navigation={navigation} />}
            style={{ flex: 1 }}
          />
        }
      </View>

    </View>
  )
}

export default MyOrderScreen;