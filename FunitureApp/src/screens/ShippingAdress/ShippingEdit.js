import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import icon from '../../utils/icon'
import { useState } from 'react'
import ApiShip from '../../api/Shipping.api'
import { useEffect } from 'react'
let isUpdate = false;
export default function ShippingAddressEdit({ navigation, route }) {
    const [checkOrders, setCheckOrders] = useState(true)
    const [ship, setShip] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    
    useEffect(() => {
        getAllShip();
        if(route.params!=null){
            if (route.params.name) {
                setName(route.params.name);
                setPhone(route.params.phoneNumber);
                setAddress(route.params.address);
                isUpdate = true;
            }
        }
      
    }, [])
    const saveShip = async () => {
        
        if (isUpdate) {
            console.log('update')
            let response = await ApiShip.Update(address, phone, name, '', route.params.active, route.params.id);
            if (response.isSuccess) {
                alert('Thành công');
                navigation.goBack();
            }
            else alert(response.msg);

        }
        else {
            let response = await ApiShip.Add(address, phone, name, '');
            if (response.isSuccess) {
                alert('Thành công');
                navigation.goBack();
            }
            else alert(response.msg);
        }
    }

    const getAllShip = async () => {
        var response = await ApiShip.GetAll();
        if (response.isSuccess) {
            setShip(response.data);
        }
        else alert(response.msg);
    }

    return (
        <View style={styles.container}>
            <Header
                title='Thông tin khách hàng'
                iconLeft={icon.arrowLeft}
                onPressLeft={()=>navigation.goBack()}
                
            />
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ height: 30 }}></View>
                <View style={styles.input}>
                    <Text>
                        Họ và Tên
                    </Text>
                    <TextInput
                        placeholder='______'
                        style={styles.txt}
                        placeholderTextColor='gray'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.input}>
                    <Text>
                        Số điện thoại
                    </Text>
                    <TextInput
                        placeholder='______'
                        style={styles.txt}
                        value={phone}
                        keyboardType='number-pad'
                        placeholderTextColor='gray'
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>
                <View style={styles.input}>
                    <Text>
                        Địa chỉ
                    </Text>
                    <TextInput
                        placeholder='______'
                        style={styles.txt}
                        placeholderTextColor='gray'
                        multiline
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => saveShip()}>
                    <Text style={styles.btnText}>Lưu</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,

        backgroundColor: '#fff'
    },
    input: {
        backgroundColor: '#f8f8f8', borderRadius: 10, padding: 10, marginBottom: 10, marginHorizontal: 5
    },
    txt: {
        color: '#000', padding: 0
    },
    btn: {
        paddingVertical: 10, paddingHorizontal: 50, backgroundColor: '#303030', borderRadius: 10, marginHorizontal: 50, marginTop: 50
    },
    btnText: { color: '#fff', fontSize: 17, textAlign: 'center' }
})