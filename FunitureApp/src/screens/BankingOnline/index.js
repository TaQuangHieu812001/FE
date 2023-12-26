import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import icon from "../../utils/icon";
import BankingApi from "../../api/BankingTransfer";
import image from "../../utils/image";
import styles from "./styles";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ScreenName } from "../../navigation/ScreenName";

const BankingOnlineScreen = ({ navigation,route }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        const getDataTransfer = async () => {
            try {
                const result = await BankingApi.BankingTransferApi();
                if (result.isSuccess) {
                    setData(result.data);
                } else {
                    setData(result.msg)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDataTransfer()
    }, [])
    const chooseImage = async () => {
        try {
            const result = await launchImageLibrary(); // Gọi hàm để chọn ảnh
            console.log('Image Picker Result:', result);
            
            const uri = result.assets[0]?.uri
                setSelectedImage(uri)
                console.log("-----",uri);
            let uploadResponse= await BankingApi.UploadImage(uri);
            console.log(uploadResponse.data)
            if(uploadResponse.isSuccess){
                let imgUrl=uploadResponse.data[0];
                await BankingApi.UpdateOrder(imgUrl,route.params.order.id);
                navigation.navigate(ScreenName.CheckoutSuccess)
            }
        } catch (error) {
            console.log('Image Picker Error:', error);
        }
    };
    // console.log(data.data.accountBanking)
    if (data) {
        return (
            <View style={styles.container}>
                <Header
                    title='Giao dịch Online'
                    iconLeft={icon.arrowLeft}
                    onPressLeft={() => navigation.goBack()}
                />
             
                <View style={styles.bankingDetails}>
                    <Text style={styles.nameBanking}>Số tài khoản:</Text>
                    <Text style={styles.nameBanking}>{data.accountBanking}</Text>
                </View>
                <View style={styles.bankingDetails}>
                    <Text style={styles.nameBanking}>Chủ tài khoản:</Text>
                    <Text style={styles.nameBanking}>{data.userAccount}</Text>
                </View>
                <View style={styles.bankingDetails}>
                    <Text style={styles.nameBanking}>Tên ngân hàng:</Text>
                    <Text style={styles.nameBanking}>{data.nameBanking}</Text>
                </View>
                <View style={styles.bankingDetails}>
                    <Text style={styles.nameBanking}>Chi nhánh:</Text>
                    <Text style={styles.nameBanking}>{data.branchAdress}</Text>
                </View>
                <View style={styles.bankingDetails}>
                    <Text style={styles.nameBanking}>Số tiền:</Text>
                    <Text style={styles.nameBanking}>{route.params.order.total}</Text>
                </View>
                <View style={styles.bankingDetails}>
                    <Text style={styles.nameBanking}>Nội dung chuyển khoản:</Text>
                    <Text style={styles.nameBanking}>thanhtoan_{route.params.order.id}</Text>
                </View>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: '10%', alignItems: 'center' }}
                    onPress={chooseImage}
                >
                    <Image
                        source={icon.increase}
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                    />
                    <Text style={styles.nameUpFile} > Up ảnh chuyển khoản</Text>
                   
                </TouchableOpacity>
                
                <Image source={{uri:selectedImage}}
                    style={{width:'100%',height:'50%',marginTop:10}}
                    resizeMode="contain"
                />
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
        )
    }


}
export default BankingOnlineScreen;